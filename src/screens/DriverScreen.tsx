import {RootStackParamList} from '../router/types';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useAppDispatch, RootState} from '../../store';
import Loader from '../components/Loading';
import Error from '../components/Error';
import {fetchDriverDetails} from '../store/driverDetail/driverDetailsThunks';
import {useEffect} from 'react';

const DriverScreen = ({
  route,
}: StackScreenProps<RootStackParamList, 'DriverScreen'>) => {
  const dispatch = useAppDispatch();

  const {driverDetail, status, error} = useSelector(
    (state: RootState) => state.driverDetail,
  );

  const isLoading = status === 'loading';
  const isError = status === 'failed';

  useEffect(() => {
    dispatch(fetchDriverDetails(route.params.driverId));
  }, [dispatch, route.params.driverId]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <View style={styles.wrapper}>
      <Text numberOfLines={1} style={styles.title}>
        👨 {driverDetail?.givenName} {driverDetail?.familyName}
      </Text>
      <View style={styles.info}>
        <Text style={styles.text}>
          <Text style={styles.textValue}>Nationality: </Text>
          {driverDetail?.nationality}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textValue}>Date of birth: </Text>
          {driverDetail?.dateOfBirth}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
    color: 'black',
  },
  textValue: {
    fontWeight: 'bold',
  },
  info: {
    marginTop: 16,
  },
});

export default DriverScreen;
