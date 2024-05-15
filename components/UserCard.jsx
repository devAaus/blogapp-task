import Image from 'next/image'
import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10 overflow-hidden rounded-full'>
                <Image src={user.img} alt='avatar' width={40} height={40} className='rounded-full' />
            </div>

            <span className='text-gray-400 text-sm'>{user.name}</span>
        </div>
    )
}

export default UserCard