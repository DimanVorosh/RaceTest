import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  DriversScreen: undefined;
  DriverScreen: {driverId: string; fullName: string};
  DriverRacesScreen: {driverId: string; fullName: string};
};

export type RootNavigationProp = NavigationProp<RootStackParamList>;
