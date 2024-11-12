import {createAsyncThunk} from '@reduxjs/toolkit';
import {getDriverDetails} from '../../api/drivers';
import {DriverDetail} from '../../types';

export const fetchDriverDetails = createAsyncThunk<DriverDetail, string>(
  'drivers/fetchDriverDetails',
  async driverId => {
    const response = await getDriverDetails(driverId);
    return response.data.MRData.DriverTable.Drivers[0] as DriverDetail;
  },
);
