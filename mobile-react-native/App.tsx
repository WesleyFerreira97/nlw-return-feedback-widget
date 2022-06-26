import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import { Widget } from './src/components/Widget';
import 'react-native-gesture-handler';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  // Fix error
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  console.log(AppLoading);

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
      <Widget />
    </View>
  );
}
