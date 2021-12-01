import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompetitionIndex } from './sceens/data';
import { Search } from './components/base/search';
import { user, user_color } from './uills/imges';
import styled from 'styled-components/native'
import { heightUnit as h, widthUnit as w } from 'rn-flexible'
const Tab = createBottomTabNavigator();

const TabImage = styled.Image`
  width: ${w(0.8)}px;
  height: ${w(0.8)}px;
`

export const Index = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon
          if (route.name === 'Competition') {
            icon = focused ? user_color : user
          }
          return <TabImage source={icon} />
        }
      })}
    >
      <Tab.Screen 
        name="Competition" 
        component={CompetitionIndex}
        options={{
          title: 'base',
          headerRight: () => <Search/>
        }}    
      ></Tab.Screen>
    </Tab.Navigator>
  )
}