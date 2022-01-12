import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  messengerPreview: null
};

const messengerPreviewSlice = createSlice({
  name: 'messengerPreview',
  initialState,
  reducers: {
    setMessengerPreview: (state, action) => {
      state.messengerPreview = action.payload;
    },
  }
});

export const {setMessengerPreview} = messengerPreviewSlice.actions;

export default messengerPreviewSlice.reducer;

export const selectorMessengerPreview = state => state.messengerPreview.messengerPreview;