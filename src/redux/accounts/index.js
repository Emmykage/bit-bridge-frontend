import { createSlice } from '@reduxjs/toolkit'

import { getAccounts } from '../actions/account'

const initialState = {
  accounts: [],
  account: {},
  loading: true,
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
  },
})

export default AccountSlice.reducer
