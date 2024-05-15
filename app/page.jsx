import BlogList from '@/components/BlogList'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const Home = () => {
    return (
        <main className='w-full px-4'>
            <HeroSection />

            <section className='py-12'>
                <h4 className='text-2xl font-bold mb-6'>Latest Post</h4>

                <BlogList />
            </section>
        </main>
    )
}

export default Home