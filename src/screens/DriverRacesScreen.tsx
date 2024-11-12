import {RootStackParamList} from '../router/types';
import {StackScreenProps} from '@react-navigation/stack';
import {FlatList, StyleSheet} from 'react-native';
import {fetchDriverRaces} from '../store/driverRaces/driverRacesThunks';
import Error from '../components/Error';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch, RootState} from '../../store';
import Loader from '../components/Loading';
import DriverRaceCard from '../components/DriverRaceCard';

const DriverRacesScreen = ({
  route,
}: StackScreenProps<RootStackParamList, 'DriverRacesScreen'>) => {
  const dispatch = useAppDispatch();

  const {driverRaces, status, error} = useSelector(
    (state: RootState) => state.driverRaces,
  );

  const isLoading = status === 'loading';
  const isError = status === 'failed';

  useEffect(() => {
    dispatch(fetchDriverRaces({driverId: route.params.driverId}));
  }, [dispatch, route.params.driverId]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <FlatList
      data={driverRaces}
      renderItem={({item}) => <DriverRaceCard race={item} />}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});

export default DriverRacesScreen;
