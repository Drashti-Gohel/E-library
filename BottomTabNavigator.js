import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  { NavigationContainer} from '@react-navigation/native';
import SearchScreen from './screens/Search';
import TransactionScreen from './screens/Transaction';
const Tab = createMaterialBottomTabNavigator();



export default class BottomTabNavigator extends React.Component{

    render(){
    return(
        <NavigationContainer>
        <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Transaction" component={TransactionScreen} />
    </Tab.Navigator>
    </NavigationContainer>

    )}
}