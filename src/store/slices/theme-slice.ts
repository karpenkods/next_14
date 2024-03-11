import { createSlice } from '@reduxjs/toolkit'

import { IThemeState } from '@/common'

const initialState: IThemeState = {
  theme: ''
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeReducer(state, action) {
      state.theme = action.payload
    }
  }
})

export const { themeReducer } = themeSlice.actions

export default themeSlice.reducer
