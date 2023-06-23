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

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    error: null,
    status: 'idle',
  },
  reducers: {
    reverse: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, status: !mission.status };
      });
      state.missions = newState;
    }
  },
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

export const { reverse } = missionSlice.actions;

export default missionSlice.reducer;
