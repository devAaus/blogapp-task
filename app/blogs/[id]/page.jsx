import CommentBox from '@/components/CommentBox';
import UserCard from '@/components/UserCard';
import { blogs, comments, users } from '@/data'
import Image from 'next/image'

const SingleBlog = ({ params }) => {

    const { id } = params
    const blog = blogs.find(blog => blog.id === parseInt(id));

    const user = users.find(user => user.id === blog.userId);

    const comment = comments.filter(comment => comment.postId === blog.id);

    return (
        <main className='w-full px-4 py-12'>

            <div className='flex flex-col items-start gap-6 mb-8'>
                <span className='px-2 py-1 bg-blue-600 rounded-lg text-sm'>
                    {blog.category}
                </span>

                <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>
                    {blog.title}
                </h1>

                <div className='flex items-center gap-4'>
                    <UserCard user={user} />

                    <span className='text-gray-500 text-sm font-medium'>August 20, 2022</span>
                </div>
            </div>

            <div className='w-full h-[200px] md:h-[500px] overflow-hidden rounded-xl mx-auto'>
                <Image src={blog.img} alt='image' width={1000} height={600} />
            </div>

            <div className='mt-8 text-sm md:text-lg text-gray-300'>
                <div dangerouslySetInnerHTML={{ __html: blog.desc }} />
            </div>


            {/* comments */}
            <div className='mt-12'>
                <span className='text-3xl font-semibold'>
                    Comments
                </span>

                <CommentBox />

                {comment.map(comment => (
                    <div key={comment.id} className='mt-6'>

                        {users.map(user => {
                            if (user.id === comment.userId) {
                                return (
                                    <UserCard key={user.id} user={user} />
                                );
                            }
                        })}

                        <p className='text-gray-100 pl-7 md:pl-12 mt-0 md:-mt-2 text-sm md:text-lg'>
                            {comment.desc}
                        </p>

                    </div>
                ))}

            </div>

        </main>
    )
}

export default SingleBlog