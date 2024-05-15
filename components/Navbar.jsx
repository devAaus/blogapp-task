"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

const Navbar = () => {

   const pathName = usePathname()

   return (
      <nav className='py-6 px-4'>
         <div className='flex items-center justify-between'>

            <Image src='/logo.png' alt='logo' width={120} height={120} />

            <div className='flex items-center justify-center gap-4 md:gap-8'>
               {links.map((li) => (
                  <Link
                     href={li.path}
                     key={li.id}
                     className={`text-sm font-normal hover:bg-blue-900/40 p-2 rounded-md ${pathName === `${li.path}` ? 'bg-blue-900/40 text-hDark' : ''}`}
                  >
                     {li.name}
                  </Link>
               ))}
            </div>

         </div>
      </nav>
   )
}

export default Navbar