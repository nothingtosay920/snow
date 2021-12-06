import React, { createContext, useContext, useEffect, useMemo, useRef, useState, Suspense } from 'react'
import { View, FlatList, Text, RefreshControl, ActivityIndicator, ListRenderItem, Button } from 'react-native'
import { useTournamentList } from './utils';
import styled from 'styled-components/native'
import {widthUnit as w, heightUnit as h} from 'rn-flexible'
import { NomalImage, StandRowBox, FlexBox, SmallText, StandardTitle, StandardText } from '../../styles/standard';
import { TournamentListItem } from '../../types/competition';
import { usePageList } from '../../uills/pageList';
import { Details } from './detail';

type Lodingprops = {
  Loding: boolean
}

type CompetitionListProps<T> = {
  list: T[]
  renderItem: ListRenderItem<T> | null | undefined
  keyExtractor: ((item: T, index: number) => string) | undefined
  onEndReach: ((info: { distanceFromEnd: number }) => void) | null | undefined
  setLoding: any
  page: number
}

// let cleartimer: number | undefined
const timeOutSet = (time: number, func: Function) => {
  const timer = setTimeout(() => {
    func()
  }, time);
  return timer
}



const CompetitionList:React.FC<any> = (props) => {
  useEffect(() => {
    timeOutSet(1500, () => {
      props.setLoading(false)
    })
  })
  const renderItem = useMemo(() =>
  ({item}: {item:any} ) => {
      return <StandRowBox>
        <NomalImage source={{uri: item.list_image_url}} />
        <FlexBox>
          <StandardText>{item.name}</StandardText>
          <SmallText>{item.start_date}至{item.end_date}</SmallText>
        </FlexBox>
      </StandRowBox>
  }
  , [props.list])

  return(
    <FlatList 
       data = {usePageList(props.list, props.page)}
       renderItem={renderItem}
       ItemSeparatorComponent={Separation}
       windowSize={60}
       keyExtractor={(item) => item.tournamentID}
       // onRefresh={onRefresh}
       // refreshing={true}
       onEndReached={props.onEndReach}
       // onEndReachedThreshold={0}
     >
    </FlatList>
   )
}


export const Competition = (props) => {
  const { data: List, isError } = useTournamentList()
  const [page, setpage] = useState(0)
  // const [loading, setloading] = useState(false)
  // let loding = false
    console.log('正在执行');
      // cleartimer &&  clearTimeout(cleartimer)
  // const [refreshing, setRefreshing] = useState(false)
  // const [List, setList] = useState(data)
  // const onRefresh = React.useCallback(() => {
  //   console.log('reload')
  // }, []);
  
  // console.log('我开始渲染了', loding);

  const onEndReach = () => {
    console.log('set');
    props.setLoading(true)
    setpage((prev) => prev + 1)
    // if (Loading.current) return
    // loding.current = true
    // if (!cleartimer) {
      // cleartimer = timeOutSet(1000, Loding, false) 
      // console.log(cleartimer);
    // }
  }

  return (
    <>
      <StandardTitle>职业赛事</StandardTitle>
        { isError && <Text>{isError}</Text> }
      {/* <FlatList 
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
      </FlatList> */}
      
      <CompetitionList 
        list={List?.data.tournament_list}
        // renderItem={renderItem}
        // keyExtractor={(item) => item.tournamentID}
        onEndReach={onEndReach}
        setLoading={props.setLoading}
        page={page}
      ></CompetitionList>
    </>
  );
}

const Separation = styled.View`
    height: 1px;
    width: ${w(8)}px;
    background: #e0e0e0;
    margin: 0px auto;
  `
