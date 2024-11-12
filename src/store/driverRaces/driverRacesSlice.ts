import {createSlice} from '@reduxjs/toolkit';
import {DriversState} from './driverRacesTypes';
import {fetchDriverRaces} from './driverRacesThunks';
import {DriverRace} from '../../types';

const initialState: DriversState = {
  driverRaces: [],
  status: 'idle',
  error: undefined,
};

const driverRacesSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDriverRaces.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchDriverRaces.fulfilled,
        (state, {payload}: {payload: DriverRace[]}) => {
          state.status = 'succeeded';
          state.driverRaces = payload;
        },
      )
      .addCase(fetchDriverRaces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Ошибка в выполнении запроса';
      });
  },
});

export default driverRacesSlice.reducer;
