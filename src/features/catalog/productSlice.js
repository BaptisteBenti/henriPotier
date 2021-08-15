import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

const productAdapter = createEntityAdapter({
  selectId: product => product.isbn
})

const initialState = productAdapter.getInitialState({
  status: 'idle',
  error: null
})

export const fetchProduct = createAsyncThunk( 'product/fetchProduct', async () => {
  const response = await axios.get('https://henri-potier.techx.fr/books')
  return response.data
}) // API : https://github.com/xebia-france/recruitment-tests/blob/master/ExerciceFront.md

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded'
        productAdapter.setAll(state, action.payload)
      })
  },
})

export default productSlice.reducer

export const productSelectors = productAdapter.getSelectors((state) => state.product)