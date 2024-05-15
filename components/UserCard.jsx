import Image from 'next/image'
import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='w-5 h-5 md:w-10 md:h-10 overflow-hidden rounded-full'>
                <Image src={user.img} alt='avatar' width={40} height={40} className='rounded-full' />
            </div>

            <span className='text-gray-500 text-xs md:text-sm'>{user.name}</span>
        </div>
    )
}

export default UserCard