import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FlatList, Text, ActivityIndicator, Pressable, StyleSheet, View, TouchableHighlight, VirtualizedList, Dimensions } from 'react-native'
import { useTournamentList } from './utils';
import styled from 'styled-components/native'
import {widthUnit as w, heightUnit as h} from 'rn-flexible'
import { NomalImage, StandRowBox, FlexBox, SmallText, StandardTitle, StandardText } from '../../styles/standard';
import { TournamentList, TournamentListItem } from '../../types/competition';
import { useLinkTo, useNavigation, useRoute } from '@react-navigation/native';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { newPageList } from '../../uills/newPage';

interface Lodingprops {
  loading: boolean
  setloading: React.Dispatch<React.SetStateAction<boolean>>
}

interface CompetitionListProps {
  list: TournamentList | undefined
}

const ListFooterComponent:React.FC<Lodingprops> = 
  (props) => {
    return <ActivityIndicator size="small" color="#0000ff" animating={props.loading} />
  }

export const CompetitionList:React.FC<CompetitionListProps> = React.memo(
  (props) => {
    const [page, setpage] = useState(0)
    const [loading, setloading] = useState(false)
    const navigation = useNavigation()
    const {width, height} = Dimensions.get('window')
    const list = useMemo(() => 
      newPageList(props.list, page),
      [props.list, page]
    )
    
    const onEndReach = () => {
      
        if (list.pages && page < list.pages - 1) {
          setpage((prev) => {
            return prev + 1
          })
        }
    }

    const ListItem = React.memo(
      (props: {item: TournamentListItem}) => {
        return (
          <Pressable
            onPressOut={() => navigation.navigate(`Details`, {id: props.item.tournamentID})} 
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

    const renderItem = 
      (type: any, data: TournamentListItem) => {        
        return <ListItem item={data}></ListItem>
      }
      
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

      return(
        // <FlatList 
        //   data = {list.list}
        //   renderItem={renderItem}
        //   ItemSeparatorComponent={Separation}
        //   maxToRenderPerBatch={20}
        //   windowSize={80}
        //   initialNumToRender={20}
        //   keyExtractor={(item, index) => {
        //     return item.id.toString()
        //   }}
        //   // onRefresh={onRefresh}
        //   // refreshing={true}
        //   onEndReached={onEndReach}
        //   // ListFooterComponent={<ListFooterComponent setloading={setloading} loading={loading}></ListFooterComponent>}
        //   onEndReachedThreshold={0}
        //    />
        <RecyclerListView
          dataProvider={dataProvider.cloneWithRows(list.list as any)}
          layoutProvider={layoutProvider}
          rowRenderer={renderItem}
          onEndReached={onEndReach}
        />
     )
  }
)


export const Competition = ({navigation}: {navigation: any}) => {
  const { data: List, isError } = useTournamentList()
  
  return (
    <>
      { List ? <>
        <StandardTitle>职业赛事</StandardTitle>
      <CompetitionList 
        list={List?.data.tournament_list}
       ></CompetitionList>
      </> : <View></View>}
    </>
  );
}

const Separation = styled.View`
    height: 1px;
    width: ${w(8)}px;
    background: #e0e0e0;
    margin: 0px auto;
  `
