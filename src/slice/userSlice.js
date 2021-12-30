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
    getUserID: (state) => {
      return state.user.uid;
    }
  }
});

export const {setUserInformation} = userSlice.actions;
export default userSlice.reducer;

export const selectorUser = state => state.user;