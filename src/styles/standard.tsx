import { heightUnit as h, widthUnit as w } from 'rn-flexible'
import styled from 'styled-components/native'

export const StandRowBox = styled.View`
  flexDirection: row;
  alignItems: center;
  background: #fff;
  borderWidth: 1px;
  borderColor: #e0e0e0;
`

export const NomalImage = styled.Image`
  width: ${w(1.4)}px;
  height: ${h(0.8)}px;
  margin: ${w(0.2)}px;
`
export const IconImage = styled.Image`
  width: ${w(0.8)}px;
  height: ${w(0.8)}px;
  margin: ${w(0.2)}px;
`

export const SmallText = styled.Text`
  fontSize: ${w(0.3)}px;
  color: #7e7c7c;
`

export const StandardText = styled.Text`
  fontSize: ${w(0.4)}px;
  marginHorizontal: ${w(0.2)}px;
`
export const LargeText = styled.Text`
fontSize: ${w(0.6)}px;
`
export const LargeMarginText = styled.Text`
fontSize: ${w(0.6)}px;
  marginHorizontal: ${w(0.2)}px;
`

export const FlexBox = styled.View`
  flexDirection: column;
  height: ${h(0.8)}px;
  justifyContent: space-between;
`

export const StandardTitle = styled.Text`
  background: #d1d1d1;
  fontSize: 16px;
  fontWeight: bold;
`