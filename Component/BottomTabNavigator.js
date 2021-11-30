import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../Screens/SearchScreen';
import TransactionScreen from '../Screens/TransactionScreen';
const Tab=createBottomTabNavigator()

export default class BottomTabNavigator extends Component{
render(){
  return (
    <NavigationContainer>
        <TabNavigator>
            <Tab.Screen name="Transaction" component={TransactionScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
             
        </TabNavigator>
    </NavigationContainer>
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
  