import { configureStore } from '@reduxjs/toolkit'
import * as store from '../store'

export default configureStore({
  reducer: {
    user: store.user
  }
})