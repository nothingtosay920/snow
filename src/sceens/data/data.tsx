import { useRoute } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { ParamsContext } from './detail'
import { getTouranmentData } from './utils'

export const Data = () => {
  const id = useContext(ParamsContext)
  const [page, setpage] = useState(0)
  const list = getTouranmentData(id, page)
  console.log(list[1]);
    
  return (
    <>
      {/* {isError ? <View>Error</View> : */}
        <View></View>
       {/* } */}
    </>
  )
}

