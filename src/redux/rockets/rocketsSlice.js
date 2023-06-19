import { createSlice } from '@reduxjs/toolkit';

// const api = 'https://api.spacexdata.com/v4/rockets';

// export const getRockets = createAsyncThunk('rockets/getRockets', async () =>
//   fetch(api)

//     .then((resp) => resp.json())
//     .catch((err) => console.log(error))
// console.log(resp.json());
//     );

const initialState = {
  id: '123s',
  rocket_name: 'sad',
  description: 'asd',
  flickr_images: 'https://imgur.com/DaCfMsj.jpg',
  isLoading: false,
  error: null,
  status: 'idle',
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  //   extraReducers: {
  //     [getRockets.pending]: (state) => {
  //       // console.log(action);
  //       state.isLoading = false;
  //     },
  //     [getRockets.fullfiled]: (state, action) => {
  //       console.log(action);
  //       state.isLoading = false;
  //       state.rockets = action.payload;
  //     },
  //     [getRockets.rejected]: (state) => {
  //       // console.log(action);
  //       state.isLoading = false;
  //     },
  //   },
});

export default rocketSlice.reducer;
