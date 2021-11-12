import React from 'react'
import { NavigationFunctionComponent } from 'react-native-navigation';
import { View, FlatList, Text } from 'react-native'
import { useTournamentList } from './utils';
import { http } from '../../utills/http';
import { competitionAPI } from '../../utills/base-url';

export const Competition: React.FC = (props) => {
  const { data: List, isError } = useTournamentList()
  console.log(List?.data.tournament_list, 'data')
  return (
    <>
      <Text>职业赛事</Text>
        { isError && <Text>{isError}</Text> }
        {/* <FlatList 
        data = {List?.data.tournament_list}
        >
      </FlatList> */}
      </>
  );
}

{/* { isError && <Text>CHU CUO LE</Text>} */}
      {/* <FlatList 
        data = {List?.data.tournament_list}
      >
      </FlatList> */}