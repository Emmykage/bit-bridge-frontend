import { Spin } from 'antd'
import React from 'react'

const LoadingComp = () => {
  return (
    <div className='h-96 w-full flex justify-center bg-gray-100 items-center'>
    <Spin tip="Loading...">
   
   </Spin></div>
  )
}

export default LoadingComp