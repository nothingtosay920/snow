import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Schedule } from './schedule';
import { Data }  from './data';
import { View } from 'react-native';
import { TDataList, TournamentData } from '../../types/competition';
import { ParamsContext } from './context';

const Tab = createMaterialTopTabNavigator();
type detailParmas = {
  id: number,
  name: string,
  key: string,
  params: {
    id: string
  }
}

export const Details =  () => {
  const route = useRoute<detailParmas>()
  console.log('datails');
  
  return (
    <>
      <ParamsContext.Provider value={route.params.id}>
      <Tab.Navigator>
        <Tab.Screen name="赛程" component={Schedule} />
        <Tab.Screen name="赛事数据" component={Data} />
      </Tab.Navigator>
     </ParamsContext.Provider>
    </>
  );
}


