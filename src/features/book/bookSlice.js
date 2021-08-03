import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  error: null
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {

  }
})

export default bookSlice.reducer