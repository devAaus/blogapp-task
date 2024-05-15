import BlogCard from '@/components/BlogCard'
import PaginationControls from '@/components/PaginationControls'
import SearchBox from '@/components/SearchBox'
import { blogs } from '@/data'
import React from 'react'

const Blogs = ({ searchParams }) => {

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '6'

    const start = (page - 1) * per_page
    const end = start + per_page

    const blog = blogs.slice(start, end)


    return (
        <main className='w-full px-4 py-12'>

            <div className='px-2 py-6 flex justify-between'>
                <h1 className='text-3xl font-bold'>All Blogs</h1>


                {/* search bar */}
                <SearchBox />
            </div>


            {/* blog cards */}
            <div className='grid grid-cols-3 gap-6'>
                {blog.map((b) => (
                    <BlogCard key={b.id} b={b} />
                ))}
            </div>

            <PaginationControls
                hasNext={end < blogs.length}
                hasPrev={start > 0}
            />

        </main>
    )
}

export default Blogs