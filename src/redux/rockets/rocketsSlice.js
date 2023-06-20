import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const resp = await fetch(api);
  if (!resp.ok) {
    throw new Error('rockets fetched unsuccessfully');
  }
  const data = await resp.json();
  return data;
});

// const initialState = {
//   id: '123s',
//   rocket_name: 'sad',
//   description: 'asd',
//   flickr_images: 'https://imgur.com/DaCfMsj.jpg',
//   isLoading: false,
//   error: null,
//   status: 'idle',
// };

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    error: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.status = 'success';
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketSlice.reducer;
