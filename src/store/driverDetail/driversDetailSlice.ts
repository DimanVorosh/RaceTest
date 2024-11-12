import {createSlice} from '@reduxjs/toolkit';
import {DriverDetail} from '../../types';
import {DriverDetailState} from './driversDetailTypes';
import {fetchDriverDetails} from './driverDetailsThunks';

const initialState: DriverDetailState = {
  driverDetail: undefined,
  status: 'idle',
  error: undefined,
};

const driverDetailSlice = createSlice({
  name: 'driverDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDriverDetails.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchDriverDetails.fulfilled,
        (state, {payload}: {payload: DriverDetail}) => {
          state.status = 'succeeded';
          state.driverDetail = payload;
        },
      )
      .addCase(fetchDriverDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Ошибка в выполнении запроса';
      });
  },
});

export default driverDetailSlice.reducer;
