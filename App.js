import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import { TabNavigator, StackNavigator } from 'react-navigation'
// Screens
import Departamento from './screens/departamento'
import Ajustes from './screens/ajustes'
import Reporte from './screens/reporte'

export default class App extends React.Component {
  render() {
    const MainNavigation = TabNavigator({
      departamento: { screen: Departamento },
      reporte: { screen: Reporte },
      ajustes: { screen: Ajustes }
    }, { lazy: true })

    return (
      <View style={styles.container}>
        <MainNavigation></MainNavigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
