import React from 'react'
import { Image, Pressable, ImageSourcePropType } from 'react-native'

export type AvatarProps = {uri: ImageSourcePropType}

export const Avatar: React.FunctionComponent<AvatarProps> = ({uri}) => {
  return (
    <Pressable onPress={() => console.log('跳转')}>
      <Image source={uri}></Image>
    </Pressable>
  )
}