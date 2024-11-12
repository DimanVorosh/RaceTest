import {StyleSheet, Text, View} from 'react-native';
import {DriverRace} from '../types';

type DriverRaceCardProps = {
  race: DriverRace;
};

const DriverRaceCard = ({race}: DriverRaceCardProps) => {
  const raceInfo = race.Results[0];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>🏎</Text>
      <Text style={styles.text}>
        <Text style={styles.textValue}>Position: </Text>
        {raceInfo.position}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textValue}>Laps: </Text>
        {raceInfo.laps}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textValue}>Number: </Text>
        {raceInfo.number}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textValue}>Points: </Text>
        {raceInfo.points}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textValue}>Country: </Text>
        {race.Circuit.Location.country}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textValue} numberOfLines={1}>
          Circuit:{' '}
        </Text>
        {race.Circuit.circuitName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 12,
  },
  title: {
    fontSize: 30,
  },
  text: {
    fontSize: 18,
    lineHeight: 25,
    color: 'black',
  },
  textValue: {
    fontWeight: 'bold',
  },
});

export default DriverRaceCard;
