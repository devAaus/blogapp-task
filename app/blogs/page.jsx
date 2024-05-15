"use client"

import BlogCard from '@/components/BlogCard'
import PaginationControls from '@/components/PaginationControls'
import SearchBox from '@/components/SearchBox'
import { blogs } from '@/data'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Blogs = ({ searchParams }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(router.query.query); // Update searchQuery state with the query param from URL
    };

    // Filter blogs based on search query
    const filteredBlogs = searchQuery
        ? blogs.filter((blog) => blog.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : blogs;


    // Pagination
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '6';
    const start = (page - 1) * per_page;
    const end = start + per_page;
    const paginatedBlogs = filteredBlogs.slice(start, end);

    return (
        <main className='w-full px-4 py-12'>

            <div className='px-2 py-6 flex flex-col md:flex-row gap-2 justify-between'>
                <h1 className='text-3xl font-bold'>All Blogs</h1>

                {/* search bar */}
                <SearchBox handleSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>


            {/* blog cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {paginatedBlogs.map((blog) => (
                    <BlogCard key={blog.id} b={blog} />
                ))}
            </div>

            <PaginationControls
                hasNext={end < filteredBlogs.length}
                hasPrev={start > 0}
            />

        </main>
    )
}

export default Blogs