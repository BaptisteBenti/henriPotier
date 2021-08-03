import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  error: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  }
})

export default cartSlice.reducer