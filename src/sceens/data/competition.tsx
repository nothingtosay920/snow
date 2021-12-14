import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FlatList, Text, ActivityIndicator, Pressable, StyleSheet, View, TouchableHighlight, VirtualizedList } from 'react-native'
import { useTournamentList } from './utils';
import styled from 'styled-components/native'
import {widthUnit as w, heightUnit as h} from 'rn-flexible'
import { NomalImage, StandRowBox, FlexBox, SmallText, StandardTitle, StandardText } from '../../styles/standard';
import { TournamentList, TournamentListItem } from '../../types/competition';
import { usePageList } from '../../uills/pageList';
import { Details } from './detail';
import { useLinkTo, useNavigation } from '@react-navigation/native';

interface Lodingprops {
  loading: boolean
  setloading: React.Dispatch<React.SetStateAction<boolean>>
}

interface CompetitionListProps {
  list: TournamentList | undefined
}

// function throttle(fun: any, delay: any) {
//   let last: any, deferTimer: any
//   return function (args) {
//       let that = this
//       let _args = arguments
//       let now = +new Date()
//       if (last && now < last + delay) {
//           clearTimeout(deferTimer)
//           deferTimer = setTimeout(function () {
//               last = now
//               fun.apply(that, _args)
//           }, delay)
//       }else {
//           last = now
//           fun.apply(that,_args)
//       }
//   }
// }

const ListFooterComponent:React.FC<Lodingprops> = 
  (props) => {
    return <ActivityIndicator size="small" color="#0000ff" animating={props.loading} />
  }

const ListItem = React.memo(
  (props: {item: TournamentListItem}) => {
    return (
      <Pressable
            //  onPressOut={() => LinkTo('/Details')} 
             style={
               ({ pressed }) => [
                 {
                   backgroundColor: pressed
                     ? '#ECE9E6'
                     : 'white'
                 }
               ]
             }> 
      <StandRowBox >
        <NomalImage source={{uri: props.item.list_image_url}} />
        <FlexBox>
          <StandardText>{props.item.name}</StandardText>
          <SmallText>{props.item.start_date}至{props.item.end_date}</SmallText>
        </FlexBox>
      </StandRowBox>
      </Pressable>
      )

  }

)





const CompetitionList:React.FC<CompetitionListProps> = React.memo(
  (props) => {
    const LinkTo = useLinkTo()
    const [page, setpage] = useState(0)
    const [loading, setloading] = useState(false)
    const timer = useRef(0)
    const list = useMemo<TournamentList[]>(() => 
      usePageList(props.list, page),
      [props.list, page]
    )
    
    const onEndReach = () => {
      console.log('--');
      
      // _.throttle(() => {
        // setloading(true)
        setpage((prev) => {
          return prev + 1
        })
      // }, 1500)
      // setloading(true)
      // timer.current = setTimeout(() => {
      //   setloading(false)
      //   clearTimeout(timer.current)
      // }, 1500);
      // setpage((prev) => {
      //   return prev + 1
      // })
    }

    const map = (itemList) => {
      return itemList?.forEach((i) => {
        return (
          <Pressable 
          onPressOut={() => LinkTo('/Details')}
          style={
            ({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#ECE9E6'
                  : 'white'
              }
            ]
          }>
          <ListItem item={i} ></ListItem>)
          </Pressable>
        )}
      )
    }
    const renderItem = ({itemList, index}) => {
      const items =  itemList?.forEach((i) => {
        return (
          <Pressable 
          onPressOut={() => LinkTo('/Details')}
          style={
            ({ pressed }) => [
              {
                backgroundColor: pressed
                  ? '#ECE9E6'
                  : 'white'
              }
            ]
          }>
          <ListItem item={i} ></ListItem>)
          </Pressable>
        )}
      )  
      return <View>
        {items}
      </View> 
    }
    
      return(
        <FlatList 
          data = {list}
          renderItem={renderItem}
          ItemSeparatorComponent={Separation}
           windowSize={80}
           initialNumToRender={20}
          keyExtractor={(item) => {
              return Math.random() + '' || item[0].tournamentID 
           
          }}
          // onRefresh={onRefresh}
          // refreshing={true}
          onEndReached={onEndReach}
          ListFooterComponent={<ListFooterComponent setloading={setloading} loading={loading}></ListFooterComponent>}
          onEndReachedThreshold={30}
           />
        // <VirtualizedList
        // data = {list}
        // renderItem={renderItem}
        // getItemCount={(data)=> 200}
        // getItem={(data, index) => {
        //   return list[index]
        // }}
        // keyExtractor={(item) => item?.tournamentID}
        // onEndReached={onEndReach}
        //  >

        //  </VirtualizedList>
     )
  }
)


export const Competition = ({navigation}: {navigation: any}) => {
  const { data: List, isError } = useTournamentList()
  
  return (
    <>
      <StandardTitle>职业赛事</StandardTitle>
      <CompetitionList 
        list={List?.data.tournament_list}
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