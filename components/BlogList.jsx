import React from 'react'
import BlogCard from './BlogCard'
import { blogs } from '@/data'

const BlogList = () => {
    return (
        <div className='grid grid-cols-3 gap-6'>
            {blogs.map((b) => (
                <BlogCard key={b.id} b={b} />
            ))}
        </div>
    )
}

export default BlogList