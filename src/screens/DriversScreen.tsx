/* eslint-disable react/no-unstable-nested-components */
import {RootStackParamList} from '../router/types';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {RootState, useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import Error from '../components/Error';
import {fetchDrivers} from '../store/drivers/driverThunks';
import {useCallback, useEffect} from 'react';
import Loader from '../components/Loading';
import DriverCard, {ITEM_HEIGHT} from '../components/DriverCard';
import {FlashList} from '@shopify/flash-list';

const DriversScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'DriversScreen'>) => {
  const dispatch = useAppDispatch();

  const {drivers, status, error, isFinished, page} = useSelector(
    (state: RootState) => state.drivers,
  );

  const isLoading = status === 'loading';
  const isError = status === 'failed';

  useEffect(() => {
    dispatch(fetchDrivers(1));
  }, [dispatch]);

  const navigateToDriver = useCallback(
    (driverId: string, fullName: string) => {
      navigation.navigate('DriverScreen', {driverId, fullName});
    },
    [navigation],
  );

  const navigateToRaces = useCallback(
    (driverId: string, fullName: string) => {
      navigation.navigate('DriverRacesScreen', {driverId, fullName});
    },
    [navigation],
  );

  if (isLoading && page === 1) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <FlashList
      estimatedItemSize={ITEM_HEIGHT}
      data={drivers}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      renderItem={({item}) => (
        <DriverCard
          familyName={item.familyName}
          givenName={item.givenName}
          handlePress={() =>
            navigateToDriver(
              item.driverId,
              `${item.givenName} ${item.familyName}`,
            )
          }
          handlePressRightAction={() =>
            navigateToRaces(
              item.driverId,
              `${item.givenName} ${item.familyName}`,
            )
          }
        />
      )}
      keyExtractor={item => item.driverId}
      ListFooterComponent={() => isLoading && <Loader onlyLoader />}
      onEndReachedThreshold={0.7}
      onEndReached={() => {
        if (!isFinished && !isLoading) {
          dispatch(fetchDrivers(page + 1));
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  list: {
    paddingTop: 16,
    paddingHorizontal: 12,
  },
});

export default DriversScreen;
