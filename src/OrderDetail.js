import React from 'react'

export default function OrderDetail() {
  return (
    <div className='mt-10'>
        <h1 className='mb-6 text-xl text-gray-600'>Order Detail</h1>
        <div
        className='flex justify-between items-center my-6'
        >
            <div className='flex items-center'>
            <img className='rounded-lg' width={40} height={40} src='https://th.bing.com/th/id/OIP.NLFfhDdrvscaO2d2XKuQiAHaJQ?w=170&h=213&c=7&r=0&o=5&dpr=1.25&pid=1.7'></img>
            <p className='ml-3 text-gray-600 text-sm'>Lorem Ipsum Dolor asmet</p>
            </div>
            <p className=' text-gray-600 text-sm'>20$</p>
        </div>
    </div>
  )
}
