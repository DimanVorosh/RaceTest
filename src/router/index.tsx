import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import DriversScreen from '../screens/DriversScreen';
import DriverScreen from '../screens/DriverScreen';
import DriverRacesScreen from '../screens/DriverRacesScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="DriversScreen">
      <RootStack.Screen
        name="DriversScreen"
        component={DriversScreen}
        options={{title: 'Drivers List'}}
      />
      <RootStack.Screen
        name="DriverScreen"
        component={DriverScreen}
        options={({route}) => ({
          title: route.params.fullName,
          headerBackTitle: 'Drivers List',
        })}
      />
      <RootStack.Screen
        name="DriverRacesScreen"
        component={DriverRacesScreen}
        options={({route}) => ({
          title: route.params.fullName,
          headerBackTitle: 'Driver List',
        })}
      />
    </RootStack.Navigator>
  );
};
