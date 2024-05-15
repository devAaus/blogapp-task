import BlogList from '@/components/BlogList'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const Home = () => {
    return (
        <main className='w-full px-4 py-12'>
            <HeroSection />

            <section className='mt-36'>
                <h4 className='text-2xl font-bold mb-6'>Latest Post</h4>

                <BlogList />
            </section>

            <div className=' text-center py-8'>
                <button className='w-fit p-2 bg-blue-300/10 rounded-xl'>View All Post</button>
            </div>
        </main>
    )
}

export default Home