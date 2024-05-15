"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";

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
   return (
      <nav className='py-6'>
         <div className='flex items-center justify-between'>

            <Image src='/logo.png' alt='logo' width={120} height={120} />

            <div className='flex items-center justify-center gap-8'>
               {links.map((li) => (
                  <Link href={li.path} key={li.id} className='text-sm font-normal'>{li.name}</Link>
               ))}
            </div>

            <form className=' rounded-xl bg-[#242434] flex items-center'>
               <input type="text" placeholder='Search....' className='px-2 py-1 bg-transparent' />

               <button
                  type='submit'
                  className='px-2'
               >
                  <FaSearch />
               </button>
            </form>
         </div>
      </nav>
   )
}

export default Navbar