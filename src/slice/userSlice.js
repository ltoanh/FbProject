import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  user: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInformation: (state, action) => {
      state.user = action.payload;
    },
    clearUserInformation: (state) => {
      state.user = null;
    }
  }
});

export const {setUserInformation, clearUserInformation} = userSlice.actions;

export default userSlice.reducer;

export const selectorUser = state => state.user.user;