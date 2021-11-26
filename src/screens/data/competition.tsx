import React, { useMemo, useRef, useState } from 'react'
import { View, FlatList, Text, Image, PixelRatio } from 'react-native'
import { useTournamentList } from './utils';
import styled from 'styled-components/native'
import {widthUnit as w, heightUnit as h} from 'rn-flexible'
import { NomalImage, StandRowBox, FlexBox, SmallText, StandardTitle } from '../../styles/standard';


export const Competition: React.FC = (props) => {
  const { data: List, isError } = useTournamentList()
  const ref = useRef('initialValue')
  const [refreshing, setRefreshing] = useState(false)

  const renderItem = useMemo(() =>
  ({item}) => {
      return <StandRowBox>
        <NomalImage source={{uri: item.list_image_url}} />
        <FlexBox>
          <Text>{item.name}</Text>
          <SmallText>{item.start_date}至{item.end_date}</SmallText>
        </FlexBox>
      </StandRowBox>
  }
  , [ref])
  
  return (
    <>
      <StandardTitle>职业赛事</StandardTitle>
        { isError && <Text>{isError}</Text> }
        <FlatList 
        data = {List?.data.tournament_list}
        renderItem={renderItem}
        ItemSeparatorComponent={Separation}
        windowSize={60}
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
