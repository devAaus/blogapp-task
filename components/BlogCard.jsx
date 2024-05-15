import Image from 'next/image'
import React from 'react'

const BlogCard = ({ b }) => {
    return (
        <div className='relative p-4 border border-gray-800 rounded-xl shadow-xl w-full h-[430px]'>

            {/* blog image */}
            <div className='w-[280px] h-44 overflow-hidden rounded-xl'>
                <Image src={b.img} alt='image' width={600} height={200} />
            </div>


            {/* blog content */}
            <div className='flex flex-col justify-center gap-4 mt-6'>
                <span className='w-fit px-2 py-1 bg-blue-600/10 rounded-lg text-sm text-blue-600'>{b.category}</span>

                <h1 className='text-xl font-semibold'>
                    {b.title}
                </h1>

                <div className='absolute bottom-4 flex items-center gap-4'>
                    <Image src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww' alt='avatar' width={30} height={30} className='rounded-full' />

                    <span className='text-gray-400 text-sm '>Jason Francisco</span>
                    <span className='text-gray-400 text-sm'>August 20, 2022</span>
                </div>
            </div>

        </div>
    )
}

export default BlogCard