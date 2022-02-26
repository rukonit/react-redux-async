import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cart'

const store = configureStore({reducer: cartSlice})

export default store;