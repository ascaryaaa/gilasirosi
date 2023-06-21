import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Detail from '../Screen/Detail';

const Stack = createNativeStackNavigator()

export default function HomeStack(){
    return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='HomeMenu' component={Home}/>
                <Stack.Screen name='Detail' component={Detail}/>                
            </Stack.Navigator>
    )
}