import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const resp = await fetch(api);
    if (!resp.ok) {
      throw new Error('rockets fetched unsuccessfully');
    }
    const data = await resp.json();
    return data;
  }
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    error: null,
    status: 'idle',
  },
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const reservedRockets = state.rockets.map((rocket) => {
        // console.log('helllo', rocket.id);
        if (rocket.id === id) {
          return { ...rocket, reserved: true };
        }

        return rocket;
      });
      state.rockets = reservedRockets;
    },
    cancelRocket: (state, action) => {
      const id = action.payload;
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });

      state.rockets = rockets;
      // console.log(state.rockets);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'success';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
