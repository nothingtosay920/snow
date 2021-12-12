import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompetitionIndex } from './sceens/data';
import { Search } from './components/base/search';
import { user, user_color } from './uills/imges';
import styled from 'styled-components/native'
import { heightUnit as h, widthUnit as w } from 'rn-flexible'
import { getFocusedRouteNameFromRoute, useNavigationState } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const TabImage = styled.Image`
  width: ${w(0.8)}px;
  height: ${w(0.8)}px;
`

export const Index = () => {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let icon
            if (route.name === '赛事') {
              icon = focused ? user_color : user
            }
            return <TabImage source={icon} />
          }
        })
      }
      >
        <Tab.Screen 
          name="赛事" 
          component={CompetitionIndex}
          options={({route, navigation}) => {
            const state = useNavigationState(state => state)
            return ({
              headerRight: () => <Search/>,
              tabBarStyle: {
                display: state && state.routes[0]?.state?.index ? 'none' : 'flex'
              }
            })
          }}    
        ></Tab.Screen>
      </Tab.Navigator>
  )
}
