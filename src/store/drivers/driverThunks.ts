import {createAsyncThunk} from '@reduxjs/toolkit';
import {getDrivers} from '../../api/drivers';
import {Driver} from '../../types';
import {RootState} from '../../../store';
import {setDriversPage} from './driversSlice';

export const fetchDrivers = createAsyncThunk<Driver[], number>(
  'drivers/fetchDrivers',
  async (page, {getState, dispatch}) => {
    const state = getState() as RootState;
    const {count} = state.drivers;
    dispatch(setDriversPage(page));
    const response = await getDrivers(count, page * count);
    return response.data.MRData.DriverTable.Drivers as Driver[];
  },
);
