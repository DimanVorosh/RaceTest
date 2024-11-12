import {DriverDetail} from '../../types';

export interface DriverDetailState {
  driverDetail?: DriverDetail;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}
