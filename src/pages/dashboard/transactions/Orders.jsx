import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserBillOrders } from '../../../redux/actions/order'
import { nairaFormat } from '../../../utils/nairaFormat'
import dateFormater from '../../../utils/dateFormat'
// import statusStyle from "../../../utils/statusStyle"
import Loading from '../../../compnents/loader/Loading'
import statusStyleCard from '../../../utils/statusCard'
// import statusStyle from "../../../utils/statusStyle"

const Orders = () => {
  const dispatch = useDispatch()
  const { billOrders, loading } = useSelector((state) => state.order)
  useEffect(() => {
    dispatch(getUserBillOrders())
  }, [])

  return (
    <div className="lg:p-10 bg-black py-4 px-2 text-white">
      <h4 className="text-2xl font-medium text-alt">Recent Orders</h4>
      <div className="h-[500px] overflow-x-auto relative">
        <div className="">
          <div className="mt-4 flow-root">
            <div className="">
              <div className="inline-block min-w-full py-2 align-middle">
                <table className="min-w-full bg-gray border border-gray-700 overflow-hidden rounded-md border-separate border-spacing-0 table-auto">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th
                        scope="col"
                        className="sticky top-0  z-10 border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 pr-3 text-left text-xs font-semibold text-gray-300  backdrop-blur backdrop-filter uppercase"
                      >
                        Order ID
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-200/50  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-300 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8 uppercase"
                      >
                        {' '}
                        Type
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-200/50 bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-300 backdrop-blur backdrop-filter uppercase"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 text-left border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 md:text-center text-xs font-semibold text-gray-300 backdrop-blur backdrop-filter lg:table-cell bg--300 max-w-20 md:w-max"
                      >
                        Receipient{' '}
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10  border-b border-gray-200/50  bg-opacity-75 px-6 py-3.5  text-center text-xs font-semibold text-gray-300 backdrop-blur backdrop-filter sm:table-cell uppercase"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-300 backdrop-blur backdrop-filter lg:table-cell uppercase"
                      >
                        Time{' '}
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10  border-b border-gray-200/50 bg- bg-opacity-75 px-3 py-3.5 text-center text-xs font-semibold text-gray-300 backdrop-blur backdrop-filter lg:table-cell uppercase"
                      >
                        {' '}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading ? (
                      <tr>
                        <td className=" py-8 text-center justify-center " colSpan={6}>
                          {/* <Loading  */}
                          <span>
                            <Loading />
                          </span>
                        </td>
                      </tr>
                    ) : billOrders.length > 0 ? (
                      billOrders?.map((item) => (
                        <tr key={item?.id}>
                          <td className="whitespace-nowrap border-b border-gray-600 py-2 pl-2 pr-3 text-sm font-normal ">
                            <p className="font-medium text-sm text-gray-600 leading-5">
                              {item.id}{' '}
                            </p>
                          </td>
                          <td className="whitespace-nowrap border-b border-gray-600 py-2 pl-3 pr-3 text-sm font-normal sm:pl-6 lg:pl-8">
                            <p className="font-medium text-alt -600 leading-5">
                              {item.service_type}{' '}
                            </p>
                          </td>

                          <td className="relative whitespace-nowrap border-b  border-gray-600 py-3  text-center text-gray-100 text-sm">
                            {nairaFormat(item?.total_amount, 'ngn')}
                          </td>
                          <td className="whitespace-nowrap border-b border-gray-600 md:text-center text-left max-w-32 md:w-max px-3 py-3 text-sm text-gray-200  font-semibold ">
                            <p className="font-bold">{item?.meter_number}</p>
                          </td>
                          <td className="relative whitespace-nowrap border-b border-gray-600 py-3 md:text-center text-left flex justify-center items-center text-gray-900 text-sm">
                            <span
                              className={`${statusStyleCard(item?.status)} py-1 w-full max-w-[200px] block  text-center px-3 border rounded-3xl`}
                            >
                              {item?.status}
                            </span>
                          </td>
                          <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-gray-100  text-sm sm:pr-8 lg:pr-8">
                            {dateFormater(item?.created_at)}
                          </td>
                          <td className="relative whitespace-nowrap border-b text-center border-gray-200 py-3 pr-4 pl-3 text-blue-600  text-sm sm:pr-8 lg:pr-8">
                            <span>Details</span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="text-center py-10" colSpan={6}>
                          <span className="text-black">No Orders</span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
