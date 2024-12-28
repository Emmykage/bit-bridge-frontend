import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

const BreadCrunbs = ({id,setSelectedId, setOpen}) => {
  const dropDownRef = useRef(null)
  const [toggle, setToggle] = useState(false)
  // const handleDropdown = () => {

  //   console.log("first")
  // }
  useEffect(() => {

    const closeDropDown = (e) => {
      if( dropDownRef && !dropDownRef.current.contains(e.target)){
        console.log("first")
        setToggle(false)
      }
    }

    document.addEventListener("click", closeDropDown)
  },[])
  return (
    <div className='relative' ref={dropDownRef}>

      <span className='cursor-pointer relative bg-red-200' onClick={()=> setToggle(prev => !prev)}>
      ...

        <div style={{right: "calc(100% + 10px)"}} className={`absolute bottom-0 rounded z-10  p-4 bg-white ${toggle ? "block" : "hidden"}`}>
            <ul>
              <li className='my-2'>
                <span className=''>View</span>
              </li>
              <li className='my-2'>
                <span className=''
                onClick={()=> {
                  setOpen(prev => !prev)
                  setSelectedId(id)
                }}
                >update</span>
              </li>
              <li className='my-2'>
                <span className=''>delete</span>
              </li>
            </ul>

        </div>
        </span>

    </div>
  )
}

BreadCrunbs.propTypes = {
  id: PropTypes.string,
  setSelectedId: PropTypes.func, 
  open: PropTypes.bool, 
  setOpen: PropTypes.func
}

export default BreadCrunbs