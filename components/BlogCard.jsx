import { users } from '@/data';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserCard from './UserCard';

const BlogCard = ({ b }) => {

    const user = users.find(user => user.id === b.userId);

    return (
        <div className='relative p-4 border border-gray-800 rounded-xl shadow-xl w-full h-[430px]'>

            {/* blog image */}
            <div className='w-[280px] h-44 overflow-hidden rounded-xl'>
                <Image src={b.img} alt='image' width={600} height={200} />
            </div>


            {/* blog content */}
            <div className='flex flex-col justify-center gap-4 mt-6'>
                <span className='w-fit px-2 py-1 bg-blue-600/10 rounded-lg text-sm text-blue-600'>{b.category}</span>

                <Link href={`/blogs/${b.id}`}>
                    <span className='text-xl font-semibold'>
                        {b.title}
                    </span>
                </Link>

                <div className='absolute bottom-4 flex items-center gap-4'>
                    <UserCard user={user} />
                    <span className='text-gray-400 text-sm'>August 20, 2022</span>
                </div>
            </div>

        </div>
    )
}

export default BlogCard