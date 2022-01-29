import { useRoute } from '@react-navigation/native'
import React, { useContext, useRef, useState } from 'react'
import { View, Text, Dimensions, Animated, PanResponder } from 'react-native'
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview'
import { ParamsContext } from './context'
import { useTouranmentData } from './utils'
import {widthUnit as w, heightUnit as h} from 'rn-flexible'
import { LargeMarginText, LargeText, NomalImage, StandardText, StandRowBox } from '../../styles/standard'
import styled from 'styled-components/native'
import { matchItem, TDataList } from '../../types/competition'
import { Separation } from './competition'

type DateHeaderProps = {
  date: string
}

const {width, height} = Dimensions.get('window')
const dataProvider = new DataProvider((r1, r2) => {
  return r1.tournamentID !== r2.tournamentID; 
}) 

const layoutProvider = new LayoutProvider(() => 0, (type, dim) => {
  switch (type) { 
    default:
      dim.width = width
      dim.height = h(1)
      break;
  }
}) 

let date = ''

const DateHeader = (props: DateHeaderProps) => {
  const isDate = props.date == date
  if (!isDate) {
    date = props.date
  }
  return (
    <>
      {
        isDate ? <></> : <StandardText>{props.date}</StandardText>
      }
    </>
  )
}

export const Data = () => {
  const id = useContext(ParamsContext)
  const [page, setpage] = useState(1)
  const {data, isError} = useTouranmentData(id, page)

  // 处理动画
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: Number(pan.x),
          y: Number(pan.y)
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        {useNativeDriver: true}
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  )

  const renderItem = (type, data: matchItem) => {
    return (
      <Animated.View
        {...panResponder.panHandlers}>
        <DateHeader date={data.start_date}></DateHeader>
        <StandRowBox>
          <NomalImage source={{uri: data.team_a_image}} />
          <BracketView>
            <StandardText>{data.team_a_short_name}</StandardText>
            <StandardText>{data.team_a_win + ':' + data.team_b_win}</StandardText>
            <StandardText>{data.team_b_short_name}</StandardText>
          </BracketView>
          <NomalImage source={{uri: data.team_b_image}} />
        </StandRowBox>
      </Animated.View>
    )
  }
  
  return (
    <>
      {!data ? <StandardText>isError</StandardText> : 
        
            <RecyclerListView
            dataProvider={dataProvider.cloneWithRows(data.data.no_start.list.concat(data.data.startting.list, data.data.start_end.list))}
            layoutProvider={layoutProvider}
            rowRenderer={renderItem}
            // onEndReached={onEndReach}
            // renderFooter={Separation}
            />
        
      }
      </>
  )
}

const BracketView = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: center;
`