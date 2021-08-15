import { configureStore } from '@reduxjs/toolkit'

import productReducer from '../features/catalog/productSlice'
import cartReducer from '../features/checkout/cartSlice'
import uiReducer from '../features/ui/uiSlice'
import langReducer from '../features/lang/langSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    ui: uiReducer,
    lang: langReducer,
  },
})