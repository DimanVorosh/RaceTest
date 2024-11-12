import {createAsyncThunk} from '@reduxjs/toolkit';
import {getDriverRaces} from '../../api/drivers';
import {DriverRace} from '../../types';

export const fetchDriverRaces = createAsyncThunk<
  DriverRace[],
  {driverId: string; season?: string}
>('drivers/fetchDriverRaces', async ({driverId, season}) => {
  const response = await getDriverRaces(driverId, season);
  return response.data.MRData.RaceTable.Races as DriverRace[];
});
