import React from 'react'

const CommentBox = () => {
    return (
        <form className='mt-4 flex flex-col items-start gap-2'>
            <textarea type="text" placeholder='Write a comment...' className=" px-4 py-1 bg-transparent border border-zinc-400 rounded-xl h-[100px] w-full" />

            <button type="submit" className='px-3 py-2 bg-red-500 rounded-xl'>Submit</button>
        </form>
    )
}

export default CommentBox