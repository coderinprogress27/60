import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './screens/HomeScreen';
import Summary from './screens/SummaryScreen';

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  s1: Home,
  s2: Summary,
});

var AppContainer = createAppContainer(AppNavigator)