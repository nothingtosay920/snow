import { useRoute } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { ParamsContext } from './detail'
import { Test } from './test'

export const Data = () => {
  const route = useRoute()
  const context = useContext(ParamsContext)
  return (
    <Text>this is data{route.name}{route.path}{context}</Text>
  )
}