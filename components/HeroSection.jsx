import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className='w-full'>
            <div className='relative w-full h-[600px] '>

                {/* hero image */}
                <Image src='https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hero image' fill className='object-cover rounded-xl' />


                {/* hero content */}
                <div className='absolute -bottom-20 left-16 bg-[#181A2A] p-8 rounded-xl w-[500px] border border-gray-800'>
                    <div className='flex flex-col items-start gap-6'>
                        <span className='px-2 py-1 bg-blue-600 rounded-lg text-sm'>Technology</span>

                        <h1 className='text-4xl font-semibold'>The Impact of Technology on the Workplace: How Technology is Changing</h1>

                        <div className='flex items-center gap-4'>
                            <Image src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww' alt='avatar' width={40} height={40} className='rounded-full' />

                            <span className='text-gray-400 text-sm font-medium'>Jason Francisco</span>
                            <span className='text-gray-400 text-sm font-medium'>August 20, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection