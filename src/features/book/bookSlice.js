import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

const bookAdapter = createEntityAdapter({
  selectId: book => book.isbn
})

const initialState = bookAdapter.getInitialState({
  status: 'idle',
  error: null
})

export const fetchBook = createAsyncThunk( 'book/fetchBooks', async () => {
  const response = await axios.get('https://henri-potier.techx.fr/books')
  return response.data
})
// API : https://github.com/xebia-france/recruitment-tests/blob/master/ExerciceFront.md

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchBook.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.status = 'succeeded'
        bookAdapter.setAll(state, action.payload)
      })
  },
})

export default bookSlice.reducer

export const bookSelectors = bookAdapter.getSelectors((state) => state.book)