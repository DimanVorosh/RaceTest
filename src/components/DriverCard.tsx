import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

type DriverCardProps = {
  familyName: string;
  givenName: string;
  driverId: string;
  handlePress: (driverId: string, fullName: string) => void;
  handlePressRightAction: (driverId: string, fullName: string) => void;
};

export const ITEM_HEIGHT = 50;

const DriverCard = ({
  givenName,
  familyName,
  driverId,
  handlePress,
  handlePressRightAction,
}: DriverCardProps) => {
  return (
    <Pressable
      style={styles.wrapper}
      onPress={() => handlePress(driverId, `${givenName} ${familyName}`)}>
      <Text numberOfLines={1} style={styles.fullNameContainer}>
        👨 {givenName} {familyName}
      </Text>
      <Pressable
        style={styles.rightAction}
        onPress={() =>
          handlePressRightAction(driverId, `${givenName} ${familyName}`)
        }>
        <Text>🏁 Races</Text>
      </Pressable>
    </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: ITEM_HEIGHT,
    paddingHorizontal: 12,
  },
  fullNameContainer: {
    fontSize: 16,
    color: 'black',
  },
  rightAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    color: 'white',
  },
});

export default React.memo(DriverCard);
