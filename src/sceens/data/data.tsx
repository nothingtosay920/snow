import { useRoute } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { ParamsContext } from './detail'
import { useTouranmentData } from './utils'

export const Data = () => {
  const data = useContext(ParamsContext)
  // const {list, isError} = useTouranmentData(id)

  return (
    <>
      {/* {isError ? <View>Error</View> : */}
        <View></View>
       {/* } */}
    </>
  )
}