
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './Component/BottomTabNavigator';

export default class App extends Component{
render(){
  return (
    <View style={styles.container}>
      <BottomTabNavigator/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
