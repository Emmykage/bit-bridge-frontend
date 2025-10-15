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

export const createBankAccount = createAsyncThunk(
  'account/create-bank-account',
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

export const verifyKYC = createAsyncThunk(
  'account/verifyKyc',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl + apiRoute}accounts/verify_kyc`, data, {
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

export const getAccounts = createAsyncThunk(
  'account/get-accounts',
  async (_, { rejectWithValue }) => {
    console.log('first')
    try {
      const response = await axios.get(`${baseUrl + apiRoute}accounts/user_accounts`, {
        headers: {
          Authorization: `Bearer ${fetchToken()}`,
        },
      })

      const result = response.data

      console.log(result)

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

export const createDepositAccount = createAsyncThunk(
  'account/create-deposite-account',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl + apiRoute}accounts/get_account_number`, {
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
