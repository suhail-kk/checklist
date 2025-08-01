import React from 'react'
import { formatDate } from '../helper/helper'

export default function Card({ item }) {
    const formattedDate = formatDate(item?.date)

    return (
        <div className='w-full lg:flex lf:flex-wrap lg:items-center lg:gap-6 border border-gray-500 p-3'>
            <p className='texlt-lg font-semibold mb-3 lg:mb-0'>{formattedDate}</p>
            <div className='flex flex-wrap gap-2'>
                {
                    item?.checklist?.map((item, key) => {
                        return (
                            <div key={key} className='flex p-2 border border-gray-500 justify-between items-center'>
                                <p className='text-xs'>{item?.label} : </p>&nbsp;
                                <StatusChip status={item?.value} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function StatusChip({ status }) {
    return (
        <div className={`px-2 py-1 flex justify-center items-center rounded-full text-xs text-white font-normal ${status ? "bg-green-500" : "bg-red-500"} `}>{status ? "Done" : "Not Done"}</div>
    )
}