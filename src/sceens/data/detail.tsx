import React from 'react'
import { ActivityIndicator } from 'react-native'


export const Details = (props) => {
  return <ActivityIndicator animating={props.Loding} />
}