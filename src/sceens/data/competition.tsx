import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { View, FlatList, Text, RefreshControl, ActivityIndicator } from 'react-native'
import { useTournamentList } from './utils';
import styled from 'styled-components/native'
import {widthUnit as w, heightUnit as h} from 'rn-flexible'
import { NomalImage, StandRowBox, FlexBox, SmallText, StandardTitle, StandardText } from '../../styles/standard';
import { TournamentListItem } from '../../types/competition';
import { usePageList } from '../../uills/pageList';
import { Details } from './detail';

let cleartimer: number | undefined
const timeOutSet = (time: number, setFunc: any, value: any) => {
  const timer = setTimeout(() => {
    setFunc.current = value
  console.log(setFunc.current);
  }, time);
  return timer
}

export const Competition = () => {
  const { data: List, isError } = useTournamentList()
  const [page, setpage] = useState(0)
  const Loding = useRef(false)
  useEffect(() => {
    return () => {
      cleartimer &&  clearTimeout(cleartimer)
    }
  }, [])

  // const [refreshing, setRefreshing] = useState(false)
  // const [List, setList] = useState(data)
  // const onRefresh = React.useCallback(() => {
  //   console.log('reload')
  // }, []);
  

  console.log('我开始渲染了', Loding.current);
  

  

  const onEndReach = () => {
    // if (Loading.current) return
    // setLoding(true)
    Loding.current = true
    setpage((prevState) => prevState + 1)
    // if (!cleartimer) {
      cleartimer = timeOutSet(1000, Loding, false) 
      console.log(cleartimer);
    // }
  }

  
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
  , [List])
  
  return (
    <>
      <StandardTitle>职业赛事</StandardTitle>
        { isError && <Text>{isError}</Text> }
      <FlatList 
          data = {usePageList(List?.data.tournament_list, page)}
          renderItem={renderItem}
          ItemSeparatorComponent={Separation}
          windowSize={60}
          keyExtractor={(item) => item.tournamentID}
          // onRefresh={onRefresh}
          // refreshing={true}
          onEndReached={onEndReach}
          onEndReachedThreshold={0}
        >
      </FlatList>
      <Details Loding={Loding.current}></Details>
    </>
  );
}

const Separation = styled.View`
    height: 1px;
    width: ${w(8)}px;
    background: #e0e0e0;
    margin: 0px auto;
  `
