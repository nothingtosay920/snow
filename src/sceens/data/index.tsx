import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native';
import { Competition } from './competition';
import { Details } from './detail';


const CompetitionStack = createNativeStackNavigator()

export const CompetitionIndex: React.FC = () => {
  return (
    <CompetitionStack.Navigator>
      <CompetitionStack.Screen 
        name={'Competition'} 
        component={Competition}
      ></CompetitionStack.Screen>
      <CompetitionStack.Screen 
        name={'Details'} 
        component={Details}></CompetitionStack.Screen>
    </CompetitionStack.Navigator>
    // <Details></Details>
  );
}