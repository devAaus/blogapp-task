import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const links = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'Blogs',
        path: '/blogs'
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact'
    }
]

const socials = [
    {
        id: 1,
        name: 'Twitter',
        path: 'https://twitter.com/',
        icon: <FaTwitter size={24} />
    },
    {
        id: 2,
        name: 'Github',
        path: 'https://github.com/',
        icon: <FaGithub size={24} />
    },
    {
        id: 3,
        name: 'Dribbble',
        path: 'https://dribbble.com/',
        icon: <FaDribbble size={24} />
    },
    {
        id: 4,
        name: 'Facebook',
        path: 'https://facebook.com/',
        icon: <FaFacebook size={24} />
    },
    {
        id: 5,
        name: 'Instagram',
        path: 'https://instagram.com/',
        icon: <FaInstagram size={24} />
    }
]

const Footer = () => {
    return (
        <footer>
            <div class=" mt-12 mb-4 px-4 overflow-hidden sm:px-6 lg:px-8">
                {/* <div className='flex items-center justify-center gap-4 md:gap-8'>
                    {links.map((li) => (
                        <Link
                            href={li.path}
                            key={li.id}
                            className='text-base font-normal text-gray-500  p-2 rounded-md '
                        >
                            {li.name}
                        </Link>
                    ))}
                </div> */}

                <div class="mt-8 flex justify-center space-x-6">
                    {socials.map((s) => (
                        <Link key={s.id} href={s.path} class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">{s.name}</span>
                            {s.icon}
                        </Link>
                    ))}
                </div>


                <p class="mt-8 text-center text-base text-gray-400">
                    &copy; 2024 MetaBlog, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer