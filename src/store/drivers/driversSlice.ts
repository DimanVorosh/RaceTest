import {createSlice} from '@reduxjs/toolkit';
import {fetchDrivers} from './driverThunks';
import {Driver} from '../../types';
import {DriversState} from './driversTypes';

const initialState: DriversState = {
  drivers: [],
  status: 'idle',
  error: undefined,
  page: 1,
  count: 30,
  isFinished: false,
};

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    setDriversPage: (state, {payload}: {payload: number}) => {
      state.page = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDrivers.pending, state => {
        state.status = 'loading';
        state.isFinished = false;
      })
      .addCase(
        fetchDrivers.fulfilled,
        (state, {payload}: {payload: Driver[]}) => {
          console.log(payload);
          state.status = 'succeeded';
          state.drivers = state.drivers.concat(payload);
          if (payload.length === 0) {
            state.isFinished = true;
          }
        },
      )
      .addCase(fetchDrivers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Ошибка в выполнении запроса';
        state.isFinished = true;
      });
  },
});

export const {setDriversPage} = driversSlice.actions;
export default driversSlice.reducer;
