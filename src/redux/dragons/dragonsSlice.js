import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    try {
      const resp = await fetch('https://api.spacexdata.com/v3/dragons');
      const data = await resp.json();
      const dragons = data.map((d) => ({ ...d, reserved: false }));
      return dragons;
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
  reducers: {
    reserveDragon(state, action) {
      const newState = state.dragons.map((d) => {
        if (d.id === action.payload) return { ...d, reserved: true };
        return d;
      });

      state.dragons = newState;
    },
    cancelReservation(state, action) {
      const newState = state.dragons.map((d) => {
        if (d.id === action.payload) return { ...d, reserved: false };
        return d;
      });

      state.dragons = newState;
    },
  },
  extraReducers: {
    [fetchDragons.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchDragons.fulfilled]: (state, action) => {
      state.status = 'success';
      // const dragons = [];
      // action.payload.map((d) => dragons.push({ ...d, reserved: false }));
      state.dragons = action.payload;
    },
    [fetchDragons.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { reserveDragon, cancelReservation } = dragonsSlice.actions;

export default dragonsSlice.reducer;
