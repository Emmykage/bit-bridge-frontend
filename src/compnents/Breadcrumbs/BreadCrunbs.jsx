import React, { useEffect, useRef, useState } from 'react'

const BreadCrunbs = ({id,setSelectedId, open, setOpen}) => {
  const dropDownRef = useRef(null)
  const [toggle, setToggle] = useState(false)
  const handleDropdown = () => {

    console.log("first")
  }
  useEffect(() => {

    const closeDropDown = (e) => {
      if(!dropDownRef.current.contains(e.target)){
        console.log("first")
        setToggle(false)
      }
    }

    document.addEventListener("click", closeDropDown)
  },[])
  return (
    <div className='relative' ref={dropDownRef}>

      <span className='cursor-pointer' onClick={()=> setToggle(prev => !prev)}>
      ...

      </span>
        <div className={`absolute bottom-full rounded z-10 -left-full p-4 bg-white ${toggle ? "block" : "hidden"}`}>
            <ul>
              <li className='my-2'>
                <span className=''>View</span>
              </li>
              <li className='my-2'>
                <span className=''
                // onClick={()=> {
                //   setOpen(open)
                //   setSelectedId(id)
                // }}
                >update</span>
              </li>
              <li className='my-2'>
                <span className=''>delete</span>
              </li>
            </ul>

        </div>
    </div>
  )
}

export default BreadCrunbs