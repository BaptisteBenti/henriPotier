import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const cartAdapter = createEntityAdapter()
const initialState = cartAdapter.getInitialState()

export const fetchDiscount = createAsyncThunk( 'cart/fetchDiscount', async (isbn) => {
  const response = await axios.get(`https://henri-potier.techx.fr/books/${isbn.join()}/commercialOffers`)
  return response.data
})
// API : https://github.com/xebia-france/recruitment-tests/blob/master/ExerciceFront.md

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartUpdated(state, action) {
      cartAdapter.setAll(state, action.payload)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDiscount.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDiscount.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(fetchDiscount.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.discount = action.payload
      })
  },
})

export default cartSlice.reducer

export const {
  cartUpdated
} = cartSlice.actions

export const cartSelectors = cartAdapter.getSelectors((state) => state.cart)