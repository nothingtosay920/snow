import { Dimensions, PixelRatio } from "react-native"


type Value = string | number

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const widthValue = (width: Value, defaultWidth = 750) => {
  const value = typeof width === "number"


  return width * defaultWidth / 10 

}