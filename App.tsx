import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './src/navigation/AppNavigator';
import { Colors } from './src/styles/globalStyles';
import { ContactProvider } from './src/utils/ContactContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.primary}
      />
      <ContactProvider>
        <AppNavigator />
      </ContactProvider>
    </SafeAreaProvider>
  );
}

export default App;
