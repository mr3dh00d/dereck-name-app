import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      name: '',
      lastName: ''
    }
  },
  reducers: {
    setName: (state, action) => {
      state.value.name = action.payload;
    },
    setLastName: (state, action) => {
      state.value.lastName = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setName, setLastName } = userSlice.actions

export default userSlice.reducer