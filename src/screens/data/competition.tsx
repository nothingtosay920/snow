import React from 'react'
import { View, FlatList, Text, Image, PixelRatio } from 'react-native'
import { useTournamentList } from './utils';
import { http } from '../../utills/http';
import { competitionAPI } from '../../utills/base-url';
import styled from 'styled-components/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export const Competition: React.FC = (props) => {
  const { data: List, isError } = useTournamentList()
  console.time('test')
  const test = PixelRatio.roundToNearestPixel(50)
  console.timeEnd('test')
  const renderItem = ({item}) => {
    return <RowFlexBox>
      <NomalImage source={{uri: item.list_image_url}} />
      <FlexBox>
        <Text>{item.name}</Text>
        <Text>{item.start_date}至{item.end_date}</Text>
      </FlexBox>
    </RowFlexBox>
  }

  const Separation = styled.View`
    height: ${wp(0.1)}px;
    width: ${wp('96%')};
    background: black;
    margin: 0px auto;
  `

  const Title = styled.Text`
    fontSize: 16px;
    fontWeight: bold; 
  `
  const NomalImage = styled.Image`
    width: 50px;
    height: 50px;
  `
  const RowFlexBox = styled.View`
    flexDirection: row
  `
  const FlexBox = styled.View`
    flexDirection: column
  `

  return (
    <>
      <Title>职业赛事</Title>
        { isError && <Text>{isError}</Text> }
        <FlatList 
        data = {List?.data.tournament_list.slice(0,2)}
        renderItem={renderItem}
        ItemSeparatorComponent={Separation}
        >
      </FlatList>
      </>
  );
}