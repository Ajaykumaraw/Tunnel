import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'empty',
  isLoading:false
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    storeData: (state,action) => {
      console.log('from reducer',action.payload)
      state.isLoading = true;
      state.value = action.payload;
      state.isLoading = false;
    },
    updateData: (state) => {
        state.value = action.payload;
    },
  },
})

export const { storeData, updateData } = dataSlice.actions

export default dataSlice.reducer