import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetcMissions', async () => {
  const resp = await fetch(api);
  if (!resp.ok) {
    throw new Error('rockets fetched unsuccessfully');
  }
  const data = await resp.json();
  return data;
});

// const initialState = {
//   mission_id: '123s',
//   mission_name: 'sad',
//   description: 'asd',
//   isLoading: false,
//   error: null,
//   status: 'idle',
// };

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    error: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'success';
        const missionsArr = [];
        action.payload.map((mission) => missionsArr.push({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          status: false
        }));
        state.missions = missionsArr;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
