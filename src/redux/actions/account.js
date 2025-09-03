import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiRoute, baseUrl } from '../baseUrl'
import axios from 'axios'
import { fetchToken } from '../../hooks/localStorage'
import { toast } from 'react-toastify'

export const createAccount = createAsyncThunk(
  'account/create-account',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl + apiRoute}accounts`, data, {
        headers: {
          Authorization: `Bearer ${fetchToken()}`,
        },
      })

      const result = response.data
      toast(result?.message || 'Account initialized: Account has been provided', {
        type: 'success',
      })

      return result
    } catch (error) {
      console.log(error)

      if (error.response && error.response.data) {
        console.log(error.message)
        toast(error.response.data.message ?? error.message ?? 'SOmething went wrong', {
          type: 'error',
        })
        return rejectWithValue({ message: error.message })
      }
      console.error(error)
      return rejectWithValue({ message: 'Something went wrong' })
    }
  }
)
