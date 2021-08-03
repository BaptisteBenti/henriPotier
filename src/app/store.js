import { configureStore } from '@reduxjs/toolkit'

import bookReducer from '../features/book/bookSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer,
  },
})