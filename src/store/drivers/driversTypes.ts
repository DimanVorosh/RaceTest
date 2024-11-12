import {Driver} from '../../types';

export interface DriversState {
  drivers: Driver[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
  page: number;
  count: number;
  isFinished: boolean;
}
