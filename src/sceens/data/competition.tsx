import React, { useMemo, useState } from 'react'
import { FlatList, Text, ActivityIndicator, Pressable, StyleSheet, View } from 'react-native'
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
}

interface CompetitionListProps {
  list: TournamentList | undefined
}

const ListFooterComponent:React.FC<Lodingprops> = 
  (props) => {
    return <ActivityIndicator size="small" color="#0000ff" animating={props.loading} />
  }

const ListItem = (props: {item: TournamentListItem}) => {
  return (
    <StandRowBox >
      <NomalImage source={{uri: props.item.list_image_url}} />
      <FlexBox>
        <StandardText>{props.item.name}</StandardText>
        <SmallText>{props.item.start_date}至{props.item.end_date}</SmallText>
      </FlexBox>
    </StandRowBox>)
}



const CompetitionList:React.FC<CompetitionListProps> = React.memo(
  (props) => {
    const LinkTo = useLinkTo()
    const [page, setpage] = useState(0)
    const [loading, setloading] = useState(false)
    const list = useMemo<TournamentList>(() => 
      usePageList(props.list, page),
      [props.list, page]
    )

    const onEndReach = () => {
      setloading(true)
      const timer = setTimeout(() => {
        setloading(false)
        clearTimeout(timer)
      }, 1500);
      setpage((prev) => {
        return prev + 1
      })
    }
  
    const renderItem = 
      ({item}: {item: TournamentListItem} ) =>  {
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
            <ListItem item={item} ></ListItem>
          </Pressable>
        )
      }
    
    return(
      <FlatList 
         data = {list}
         renderItem={renderItem}
         ItemSeparatorComponent={Separation}
        //  windowSize={60}
         keyExtractor={(item) => item.tournamentID}
         // onRefresh={onRefresh}
         // refreshing={true}
         onEndReached={onEndReach}
         ListFooterComponent={<ListFooterComponent loading={loading}></ListFooterComponent>}
         onEndReachedThreshold={0}
       />
     )
  }
)


export const Competition = ({navigation}: {navigation: any}) => {
  const { data: List, isError } = useTournamentList()
  
  return (
    <>
      <StandardTitle>职业赛事</StandardTitle>
        { isError && <Text>{isError}</Text> }
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