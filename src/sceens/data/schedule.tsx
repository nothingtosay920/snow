import { useRoute } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ParamsContext } from './detail'

export const Schedule = () => {
  const route = useRoute()
  return (
    <Text>this is data{route.name}{route.path}</Text>
  )
}