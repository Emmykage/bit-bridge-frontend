import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const BreadCrunbs = ({id,setSelectedId, setOpen}) => {
  const dropDownRef = useRef(null)
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const closeDropDown = (e) => {
      if( dropDownRef && !dropDownRef.current.contains(e.target)){

        setToggle(false)
      }
    }

    document.addEventListener("click", closeDropDown)
  },[])
  return (
    <div className='relative z-50' ref={dropDownRef}>

      <span className='cursor-pointer relative z-50' onClick={()=> setToggle(prev => !prev)}>
        <MdMoreHoriz className='text-lg' />

        <div style={{right: "calc(100% + 10px)"}} className={`absolute bottom-0 rounded z-10  p-2 px-4 bg-white ${toggle ? "block" : "hidden"}`}>
            <ul>
              <li className='my-2'>
                <span className='' onClick={() => navigate(`/admin/purchases/${id}`)}>View</span>
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