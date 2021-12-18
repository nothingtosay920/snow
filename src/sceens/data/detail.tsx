import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Schedule } from './schedule';
import { Data } from './data';

const Tab = createMaterialTopTabNavigator();


export const ParamsContext = React.createContext({})

export const Details =  () => {
  const route = useRoute()
  return (
    <ParamsContext.Provider value={route.path}>
      <Tab.Navigator>
        <Tab.Screen name="赛程" component={Schedule} />
        <Tab.Screen name="赛事数据" component={Data} />
      </Tab.Navigator>
    </ParamsContext.Provider>
  );
}


