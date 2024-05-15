import { blogs, users } from '@/data';
import Image from 'next/image'
import React from 'react'
import UserCard from './UserCard';

const HeroSection = () => {

    const blog = blogs.find(blog => blog.id === 1);
    const user = users.find(user => user.id === blog.userId);

    return (
        <section className='w-full'>
            <div className='relative w-full h-[600px] '>

                {/* hero image */}
                <Image src={blog.img} alt='hero image' fill className='object-cover rounded-xl' />


                {/* hero content */}
                <div className='absolute -bottom-20 left-16 bg-[#181A2A] p-8 rounded-xl w-[500px] border border-gray-800'>
                    <div className='flex flex-col items-start gap-6'>
                        <span className='px-2 py-1 bg-blue-600 rounded-lg text-sm'>
                            {blog.category}
                        </span>

                        <h1 className='text-4xl font-semibold'>
                            {blog.title}
                        </h1>


                        {/* post user */}
                        <div className='flex items-center gap-4'>
                            <UserCard user={user} />

                            <span className='text-gray-400 text-sm font-medium'>August 20, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection