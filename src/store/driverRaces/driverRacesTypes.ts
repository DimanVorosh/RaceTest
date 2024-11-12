import {DriverRace} from '../../types';

export interface DriversState {
  driverRaces: DriverRace[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}
