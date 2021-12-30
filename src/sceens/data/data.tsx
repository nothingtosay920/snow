import { useRoute } from '@react-navigation/native'
import React, { useContext, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { ParamsContext } from './context'
import { getTouranmentData } from './utils'

export const Data = () => {
  const id = useContext(ParamsContext)
  const [page, setpage] = useState(0)
  const list = useRef(getTouranmentData(id, page))
  console.log(list.current.length, '----');
    
  return (
    <>
      <View></View>
    </>
  )
}

