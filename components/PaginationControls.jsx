"use client"

import { useSearchParams, useRouter } from "next/navigation"


const PaginationControls = ({ hasPrev, hasNext }) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'

    return (
        <div className='w-full flex justify-between items-center mt-16'>

            <button
                disabled={!hasPrev}
                onClick={() => { router.push(`/blogs?page=${page - 1}`) }}
                className='w-24 text-center  p-3 bg-[#dd143d] rounded-xl
                disabled:cursor-not-allowed disabled:bg-[#dd143d]/50 '
            >
                Previous
            </button>

            <button
                disabled={!hasNext}
                onClick={() => { router.push(`/blogs?page=${parseInt(page) + 1}`) }}
                className='w-24 text-center p-3 bg-[#dd143d] rounded-xl disabled:cursor-not-allowed disabled:bg-[#dd143d]/50'
            >
                Next
            </button>
        </div>
    )
}

export default PaginationControls