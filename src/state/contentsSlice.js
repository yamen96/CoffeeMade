import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 'none',
  content: '',
  location: '',
  name: '',
}

export const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    loadImage: (state, action) => {
      state.type = 'img';
      state.content = action.payload.content;
      state.location = action.payload.location;
      state.name = action.payload.location?.split('\\')?.pop();
    }
  }
})

export const { loadImage } = contentsSlice.actions;

export default contentsSlice.reducer;