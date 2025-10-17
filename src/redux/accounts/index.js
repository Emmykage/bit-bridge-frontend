import { createSlice } from '@reduxjs/toolkit'

import { getAccounts, getBankList, getUserAccount } from '../actions/account'

const initialState = {
  accounts: [],
  account: {},
  loading: true,
  banks: [],
  message: '',
}

const AccountSlice = createSlice({
  initialState,
  name: 'account',

  extraReducers: (builder) => {
    builder
      .addCase(getAccounts.fulfilled, (state, action) => {
        return {
          ...state,
          accounts: action.payload.data,
          loading: false,
        }
      })
      .addCase(getAccounts.rejected, (state, action) => {
        return {
          ...state,
          message: action.payload?.message,
          loading: false,
        }
      })
      .addCase(getAccounts.pending, (state) => {
        return {
          ...state,
          loading: true,
        }
      })
      .addCase(getUserAccount.fulfilled, (state, action) => {
        return {
          ...state,
          account: action.payload.data,
          loading: false,
        }
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        return {
          ...state,
          message: action.payload?.message,
          loading: false,
        }
      })
      .addCase(getUserAccount.pending, (state) => {
        return {
          ...state,
          loading: true,
        }
      })
      .addCase(getBankList.fulfilled, (state, action) => {
        return {
          ...state,
          banks: action.payload.data,
          loading: false,
        }
      })
      .addCase(getBankList.rejected, (state, action) => {
        console.log('first')
        return {
          ...state,
          message: action.payload?.message,
          loading: false,
        }
      })
      .addCase(getBankList.pending, (state) => {
        return {
          ...state,
          loading: true,
        }
      })
  },
})

export default AccountSlice.reducer
