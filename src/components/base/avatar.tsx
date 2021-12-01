import React from 'react'
import { Pressable, ImageSourcePropType } from 'react-native'
import { IconImage } from '../../styles/standard'

export type IconImgProps = {uri: ImageSourcePropType}

export const IconImg: React.FunctionComponent<IconImgProps> = ({uri}) => {
  return (
    <Pressable onPress={() => console.log('跳转')}>
      <IconImage source={uri}/>
    </Pressable>
  )
}