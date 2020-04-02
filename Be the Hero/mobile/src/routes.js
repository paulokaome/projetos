import React from  'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


import List from './pages/List'
import Detail from './pages/Detail'

const AppStack = createStackNavigator();

export default function Routes(){
return(
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{headerShown : false}}> 
        <AppStack.Screen name="List" component={List}/>
        <AppStack.Screen name="Detail" component={Detail}/>
      </AppStack.Navigator>

    </NavigationContainer>

  );
}