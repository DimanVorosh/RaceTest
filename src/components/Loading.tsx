import {ActivityIndicator, StyleSheet, View} from 'react-native';

type LoaderProps = {
  onlyLoader?: boolean;
};

const Loader = ({onlyLoader = false}: LoaderProps) => {
  if (onlyLoader) {
    return <ActivityIndicator size={'large'} color={'blue'} />;
  }

  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
