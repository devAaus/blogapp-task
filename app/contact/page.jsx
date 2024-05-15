import ContactForm from '@/components/ContactForm'
import React from 'react'

const Contact = () => {
    return (
        <main className='w-full py-12'>



            <div className='grid grid-cols-5 items-center border border-gray-600 shadow-xl rounded-xl p-8 gap-8'>


                {/* contact form */}
                <div className='col-span-2'>

                    <h1 className='text-5xl font-bold uppercase' >
                        Contact Us
                    </h1>
                    <p className='mt-4 mb-8 text-lg font-semibold text-gray-300'>
                        if you need some help or any other questions, feel free to contact us
                    </p>

                    <ContactForm />
                </div>


                {/* contact info */}
                <div className=' col-span-3'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.678827325321!2d85.28316177613479!3d27.72720102461438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e559fe5ee7%3A0xc27c03a2c06e3240!2sSaptacode%20Technology!5e0!3m2!1sen!2snp!4v1715791057757!5m2!1sen!2snp"
                        width="100%"
                        height="550"
                        allowfullscreen
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        className='rounded-xl'
                    ></iframe>
                </div>

            </div>
        </main>
    )
}

export default Contact