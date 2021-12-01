import React, { useMemo, useRef, useState } from 'react'
import { View, FlatList, Text, Image, PixelRatio } from 'react-native'
import { useTournamentList } from './utils';
import styled from 'styled-components/native'
import {widthUnit as w, heightUnit as h} from 'rn-flexible'
import { NomalImage, StandRowBox, FlexBox, SmallText, StandardTitle, StandardText } from '../../styles/standard';
import { TournamentListItem } from '../../types/competition';


export const Competition = () => {
  const { data: List, isError } = useTournamentList()
  // const [refreshing, setRefreshing] = useState(false)

  // const onRefresh = React.useCallback(() => {
  //   console.log('reload');
  // }, []);
  
  const renderItem = useMemo(() =>
  ({item}: {item:TournamentListItem} ) => {
      return <StandRowBox>
        <NomalImage source={{uri: item.list_image_url}} />
        <FlexBox>
          <StandardText>{item.name}</StandardText>
          <SmallText>{item.start_date}至{item.end_date}</SmallText>
        </FlexBox>
      </StandRowBox>
  }
  , [])
  
  return (
    <>
      <StandardTitle>职业赛事</StandardTitle>
        { isError && <Text>{isError}</Text> }
      <FlatList 
          data = {List?.data.tournament_list}
          renderItem={renderItem}
          ItemSeparatorComponent={Separation}
          windowSize={60}
          keyExtractor={(item) => item.tournamentID}
          // refreshing={refreshing}
          // onRefresh={onRefresh}
        >
      </FlatList>
    </>
  );
}

const Separation = styled.View`
    height: 1px;
    width: ${w(8)}px;
    background: #e0e0e0;
    margin: 0px auto;
  `
