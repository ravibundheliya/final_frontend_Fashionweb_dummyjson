import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './store/cartSlice'
import userSlice from './store/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
})