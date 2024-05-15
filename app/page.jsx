import BlogCard from '@/components/BlogCard'
import HeroSection from '@/components/HeroSection'
import { blogs } from '@/data'
import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <main className='w-full px-4 py-12'>
            <HeroSection />

            <section className='mt-36'>
                <h4 className='text-2xl font-bold mb-6'>Latest Post</h4>

                <div className='grid grid-cols-3 gap-6'>
                    {blogs.slice(0, 6).map((b) => (
                        <BlogCard key={b.id} b={b} />
                    ))}
                </div>

                <div className=' text-center mt-20'>
                    <Link href={'/blogs'} className='w-fit p-3 bg-blue-300/10 rounded-xl'>
                        View All Post
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Home