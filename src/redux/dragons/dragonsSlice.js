import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    try {
      const resp = await fetch('https://api.spacexdata.com/v3/dragons');
      const data = await resp.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchDragons.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchDragons.fulfilled]: (state, action) => {
      state.status = 'success';
      state.dragons = action.payload;
    },
    [fetchDragons.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default dragonsSlice.reducer;
