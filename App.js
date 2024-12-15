import { SafeAreaView, StyleSheet } from 'react-native';
import { WatchlistScreen } from './WatchlistScreen';

export default function App() {
  //console.log(movieData);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <WatchlistScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  }
});