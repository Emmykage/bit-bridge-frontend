import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../redux/actions/user'
import Loading from '../../../compnents/loader/Loading'
import dateFormater from '../../../utils/dateFormat'
import { NavLink } from 'react-router-dom'

const Users = () => {
    const dispatch = useDispatch()
    const {users, loading} = useSelector(state => state.user)

    useEffect(()=> {
        dispatch(getUsers())
    }, [])

  return (
    <div>
        <h3 className='font-semibold text-xl my-5 text-gray-900'>Deposits</h3>


        <div className="px-4 sm:px-6 lg:px-8 hover:border-gray-900">
            <div className="mt-4 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full bg-gray-300 border border-gray-200 rounded-md border-separate border-spacing-0 table-auto overflow-hidden">
                            <thead className='bg-gray-900 text-alt'>
                                <tr>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">  EMAIL</th>
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-3 py-3.5  text-left text-xs font-semibold  backdrop-blur backdrop-filter sm:table-cell">Role</th>
                                    <th scope="col" className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold  backdrop-blur backdrop-filter lg:table-cell">Registered </th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-left text-xs font-semibold  backdrop-blur backdrop-filter"></th>

                        
                            </tr>

                            </thead>
                                
                            <tbody>

                                    {/* make conditional statement  here  */}
                                {/* <td colspan="5" rowspan="10" class="font-semibold text-gray-900 backdrop-blur backdrop-filter text-center">  </td> */}
                                { loading ?  <tr>

                                    <td  className=" py-8 text-center justify-center " colSpan={6}>
                                        {/* <Loading  */}
                                        <span>
                                        <Loading/>

                                        </span>

                                    </td>

                                    </tr> : users.length < 1 ? <tr> <td colSpan={6} className='text-center'> No Users</td> </tr> : users?.map(item => (

                                <tr key={item?.id}>
                                    <td className="whitespace-nowrap border-b border-gray-200 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                                        <p className="font-medium text-gray-600 leading-5">{item.email} </p>
                                    </td>
                                   
                                    
                                    {/* <td className="whitespace-nowrap border-b border-gray-200 hidden px-3 py-3 text-sm text-gray-600 sm:table-cell text-left"><span className="rounded-xl  text-xs border border-gray-200 py-1 px-2.5"> <span className= "text-base <%=set_empt_status(user.status)%>"> &#x2022;</span> <span></span></span></td> */}
                                    <td className={`${item?.role === "admin" && "text-red-600" } font-semibold relative whitespace-nowrap border-b border-gray-200 py-3 pr-4 pl-3 text-left text-gray-900 text-sm sm:pr-8 lg:pr-8`}>
                                        {item?.role}

                                    </td> 
                                    <td className="relative whitespace-nowrap border-b text-left border-gray-200 py-3 pr-4 pl-3  text-gray-900  text-sm sm:pr-8 lg:pr-8">
                                        {dateFormater(item?.created_at)}

                                    </td>
                                    <td className="whitespace-nowrap border-b border-gray-200 px-5 py-3 text-sm text-gray-600/90  font-medium "><NavLink to={`/admin/users/${item.id}`} className=" text-blue-600">View</NavLink></td>

                       
                                    </tr>
                                 ))}


                        
                            </tbody>     
                        </table>
                    </div>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users