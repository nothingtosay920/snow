import { useRoute } from '@react-navigation/native'
import React, { useContext, useRef, useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview'
import { ParamsContext } from './context'
import { getTouranmentData } from './utils'
import {widthUnit as w, heightUnit as h} from 'rn-flexible'
import { LargeMarginText, LargeText, NomalImage, StandardText, StandRowBox } from '../../styles/standard'
import styled from 'styled-components/native'
import { matchItem } from '../../types/competition'

const {width, height} = Dimensions.get('window')
const dataProvider = new DataProvider((r1, r2) => {
  return r1.tournamentID !== r2.tournamentID; 
}) 

const layoutProvider = new LayoutProvider(() => 0, (type, dim) => {
  switch (type) { 
    default:
      dim.width = width
      dim.height = h(1.2)
      break;
  }
}) 

export const Data = () => {
  const id = useContext(ParamsContext)
  const [page, setpage] = useState(1)
  const list = useRef(getTouranmentData(id, page))
  console.log(list.current.count);
  
  const renderItem = (type, data: matchItem) => {
    return (
      <>
        <StandardText>{data?.start_date}{data?.start_time}</StandardText>
        <StandRowBox>
          <NomalImage source={{uri: data.team_a_image}} />
          <BracketView>
            <LargeText>{data.team_a_short_name}</LargeText>
            <LargeMarginText>{data.team_a_win + ':' + data.team_b_win}</LargeMarginText>
            <LargeText>{data.team_b_short_name}</LargeText>
          </BracketView>
          <NomalImage source={{uri: data.team_b_image}} />
        </StandRowBox>
      </>
    )
  }
  
  return (
    <>
      <RecyclerListView
          dataProvider={dataProvider.cloneWithRows(list.current)}
          layoutProvider={layoutProvider}
          rowRenderer={renderItem}
          // onEndReached={onEndReach}
      />
    </>
  )
}

const BracketView = styled.View`
  margin: ${w(0.2)}px;
  flex: 1;
`