import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDelete, userPasswordUpdate, userProfileUpdate } from '../../redux/actions/auth'
import { useNavigate } from 'react-router-dom'
import { SET_LOADING } from '../../redux/app'
import AppModal from '../../compnents/modal/Modal'
import { toast } from 'react-toastify'

const ProfileAccountPage = () => {
  const dispatch = useDispatch()

  const [userPassword, setUserPassword] = useState({
    confirm_password: '',
    old_password: '',
    password: '',
  })
  const [open, setOpen] = useState(false)
  const [userInfo, setUserInfo] = useState({
    email: '',
    user_profile: {
      last_name: '',
      first_name: '',
      phone_number: '',
    },
  })
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const handleUserUpdate = () => {
    dispatch(SET_LOADING(true))

    dispatch(
      userProfileUpdate({
        id: user.id,
        data: {
          user: {
            email: userInfo.email,
            user_profile_attributes: { ...userInfo.user_profile },
          },
        },
      })
    ).then((result) => {
      if (userProfileUpdate.fulfilled.match(result)) {
        dispatch(SET_LOADING(false))
        toast(result.payload.message, { type: 'success' })
      } else {
        dispatch(SET_LOADING(false))
        toast(result.payload.message, { type: 'error' })
      }
    })
  }

  const handlePasswordUpdate = () => {
    if (userPassword.password !== userPassword.confirm_password) {
      toast('password mismatch', { type: 'error' })
      return
    }
    dispatch(SET_LOADING(true))

    dispatch(
      userPasswordUpdate({
        id: user.id,
        data: {
          user: {
            ...userPassword,
          },
        },
      })
    ).then((result) => {
      if (userPasswordUpdate.fulfilled.match(result)) {
        dispatch(SET_LOADING(false))
        toast('password updated', { type: 'success' })
      } else {
        dispatch(SET_LOADING(false))
      }
    })
  }

  useEffect(() => {
    setUserInfo(user)
  }, [user])

  const handleUserDelete = () => {
    dispatch(SET_LOADING(true))
    dispatch(userDelete(user.id)).then((result) => {
      if (userDelete.fulfilled.match(result)) {
        toast(result.payload.message, { type: 'success' })

        navigate('/signup')
        dispatch(SET_LOADING(false))
      } else {
        dispatch(SET_LOADING(false))
        toast(result.payload.message, { type: 'error' })
      }
    })
  }

  console.log(userInfo)

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 space-y-10">
        <h1 className="text-3xl font-bold mb-4 text-white">Account Settings</h1>

        {/* Profile Info */}

        <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-2">Personal Info</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                value={userInfo?.user_profile?.first_name}
                name="first_name"
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    user_profile: { ...userInfo.user_profile, first_name: e.target.value },
                  })
                }
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                value={userInfo?.user_profile?.last_name}
                name="last_name"
                type="text"
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    user_profile: { ...userInfo.user_profile, last_name: e.target.value },
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                value={userInfo?.user_profile?.phone_number}
                name="phone_number"
                type="text"
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    user_profile: { ...userInfo.user_profile, phone_number: e.target.value },
                  })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                value={userInfo?.email}
                name="email"
                disabled
                type="email"
                onChange={(e) => setUserInfo({ user: e.target.value })}
                className="mt-1 block w-full rounded-md border bg-gray-200 border-gray-300 p-2"
              />
            </div>
          </div>
          <button
            onClick={handleUserUpdate}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Update Info
          </button>
        </div>

        {/* Change Password */}
        <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-2">Change Password</h2> user_password_update
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                value={userPassword?.old_password}
                onChange={(e) => setUserPassword({ ...userPassword, old_password: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={userPassword?.password}
                onChange={(e) => setUserPassword({ ...userPassword, password: e.target.value })}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                value={userPassword?.confirm_password}
                onChange={(e) =>
                  setUserPassword({ ...userPassword, confirm_password: e.target.value })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>
          <button
            onClick={handlePasswordUpdate}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Update Password
          </button>
        </div>

        {/* Delete Account */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Delete Account</h2>
          <p className="text-sm text-gray-600 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete My Account
          </button>
        </div>
      </div>

      <AppModal isModalOpen={open} handleCancel={() => setOpen(false)}>
        <div className=" rounded-2xl shadow-lg p-6 max-w-md mx-auto text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Delete Account</h2>
          <p className="text-gray-100 mb-6">
            Are you sure you want to delete your account? This action cannot be undone.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-500 text-gray-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleUserDelete}
              className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </AppModal>
    </>
  )
}

export default ProfileAccountPage
