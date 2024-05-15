"use client"

import toast from "react-hot-toast";


const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        toast('Your message has been sent successfully',
            {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='w-full mt-6 flex flex-col gap-8'
        >
            <input type="text" placeholder='Your Name' className='w-full px-3 py-2 rounded-xl' />

            <input type="text" placeholder='Your Email' className='w-full px-3 py-2 rounded-xl' />

            <textarea name="" id="" placeholder='Your Message' rows={6} className='w-full px-3 py-2 rounded-xl'></textarea>

            <button type='submit' className='px-3 py-2 bg-blue-500 rounded-xl'>Submit</button>
        </form>
    )
}

export default ContactForm