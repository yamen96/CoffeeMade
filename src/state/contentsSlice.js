import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 'none',
  content: '',
  location: '',
  name: '',
  isLoading: false,
}

export const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    loadFile: (state, action) => {
      state.type = action.payload.type;
      state.content = action.payload.content;
      state.location = action.payload.location;
      state.name = action.payload.location?.split('\\')?.pop();
      state.isLoading = false;
    },
    setContentIsLoading: (state) => {
      state.isLoading = true;
    }
  }
})

export const { loadFile, setContentIsLoading } = contentsSlice.actions;

export default contentsSlice.reducer;