import { blogs, users } from '@/data';
import Image from 'next/image'
import React from 'react'
import UserCard from './UserCard';
import Link from 'next/link';

const HeroSection = () => {

    const blog = blogs.find(blog => blog.id === 1);
    const user = users.find(user => user.id === blog.userId);

    return (
        <section className='w-full'>
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[600px] transition-all duration-300 ease-in-out'>

                {/* hero image */}
                <Image src={blog.img} alt='hero image' fill className='object-cover rounded-xl' />


                {/* hero content */}
                <div className='absolute -bottom-20 left-2 md:left-16 bg-[#181A2A] p-4 md:p-8 rounded-xl w-[390px] md:w-[500px] border border-gray-800'>

                    <div className='flex flex-col items-start gap-2 md:gap-6'>

                        <span className='px-2 py-1 bg-blue-600 rounded-lg text-xs md:text-sm'>
                            {blog.category}
                        </span>

                        <Link href={`/blogs/${blog.id}`} >
                            <span className='text-base md:text-3xl font-semibold '>
                                {blog.title}
                            </span>
                        </Link>


                        {/* post user */}
                        <div className='flex items-center gap-4'>
                            <UserCard user={user} />

                            <span className='text-gray-500 text-xs md:text-sm font-medium'>August 20, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection