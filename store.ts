import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {thunk} from 'redux-thunk';
import driversSlice from './src/store/drivers/driversSlice';
import driverDetailSlice from './src/store/driverDetail/driversDetailSlice';
import driverRacesSlice from './src/store/driverRaces/driverRacesSlice';

export const store = configureStore({
  reducer: {
    drivers: driversSlice,
    driverDetail: driverDetailSlice,
    driverRaces: driverRacesSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
