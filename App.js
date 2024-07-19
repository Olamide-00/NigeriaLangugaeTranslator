import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screens/onboardingScreen';
import Welcome from './src/screens/welcome';
import Login from './src/screens/login';
import Home from './src/screens/home';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Onboarding /> */}
      {/* <Welcome/> */}
      {/* <Login/> */}
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
