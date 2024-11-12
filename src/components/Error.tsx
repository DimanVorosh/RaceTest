import {StyleSheet, Text, View} from 'react-native';

type ErrorProps = {
  error?: string;
};

const Error = ({error = 'Ошибка в получении даннных'}: ErrorProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
  },
});

export default Error;
