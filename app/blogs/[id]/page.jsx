import { blogs } from '@/data'
import Image from 'next/image'

const SingleBlog = ({ params }) => {

    const { id } = params
    const blog = blogs.find(blog => blog.id === parseInt(id));

    return (
        <main className='w-full px-4 py-12'>

            <div className='flex flex-col items-start gap-6 mb-8'>
                <span className='px-2 py-1 bg-blue-600 rounded-lg text-sm'>
                    {blog.category}
                </span>

                <h1 className='text-5xl font-semibold'>
                    {blog.title}
                </h1>

                <div className='flex items-center gap-4'>
                    <Image src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww' alt='avatar' width={40} height={40} className='rounded-full' />

                    <span className='text-gray-400 text-sm font-medium'>Jason Francisco</span>
                    <span className='text-gray-400 text-sm font-medium'>August 20, 2022</span>
                </div>
            </div>

            <div className='w-[800px] h-[500px] overflow-hidden rounded-xl mx-auto'>
                <Image src={blog.img} alt='image' width={1000} height={600} />
            </div>

            <div className='mt-8 text-lg text-gray-400'>
                <div dangerouslySetInnerHTML={{ __html: blog.desc }} />
            </div>



        </main>
    )
}

export default SingleBlog