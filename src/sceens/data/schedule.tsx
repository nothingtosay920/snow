import { useRoute } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ParamsContext } from './detail'

export const Schedule = () => {
  const id = useContext(ParamsContext)?.id
  return (
    <Text>this is Schedule{id}</Text>
  )
}