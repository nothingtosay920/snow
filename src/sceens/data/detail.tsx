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
  return (
    <>
      <ParamsContext.Provider value={route.params.id}>
      <Tab.Navigator>
        <Tab.Screen name="赛程" component={Data} />
        <Tab.Screen name="赛事数据" component={Schedule} />
      </Tab.Navigator>
     </ParamsContext.Provider>
    </>
  );
}


