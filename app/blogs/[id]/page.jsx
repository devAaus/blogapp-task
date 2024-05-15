import { blogs, users } from '@/data'
import Image from 'next/image'

const SingleBlog = ({ params }) => {

    const { id } = params
    const blog = blogs.find(blog => blog.id === parseInt(id));

    const user = users.find(user => user.id === blog.userId);

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
                    <div className='w-10 h-10 overflow-hidden rounded-full'>
                        <Image src={user.img} alt='avatar' width={40} height={40} className='rounded-full' />
                    </div>

                    <span className='text-gray-400 text-sm font-medium'>{user.name}</span>
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