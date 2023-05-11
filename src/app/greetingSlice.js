import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('http://localhost:3001/api/v1/messages');
    const data = await response.json();
    return data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
  },

  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greeting = action.payload;
    },
  },
});

export default greetingSlice.reducer;
