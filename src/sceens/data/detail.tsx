import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Schedule } from './schedule';
import { Data } from './data';
import { useTouranmentData } from './utils';
import { View } from 'react-native';
import { TournamentData } from '../../types/competition';

const Tab = createMaterialTopTabNavigator();
type detailParmas = {
  id: number,
  name: string,
  key: string,
  params: {
    id: string
  }
}

export const ParamsContext = React.createContext<TournamentData | undefined>([])

export const Details =  () => {
  const route = useRoute<detailParmas>()
  const {data, isError} = useTouranmentData(route?.params?.id)
  //  console.log(params);
   
  return (
    <>
    { isError ? <View>Error</View> :
      <ParamsContext.Provider value={data}>
      <Tab.Navigator>
        <Tab.Screen name="赛程" component={Schedule} />
        <Tab.Screen name="赛事数据" component={Data} />
      </Tab.Navigator>
     </ParamsContext.Provider>
    }
    </>
  );
}


