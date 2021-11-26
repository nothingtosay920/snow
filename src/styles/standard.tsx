import { heightUnit as h, widthUnit as w, standardUnit as s } from 'rn-flexible'
import styled from 'styled-components/native'

export const StandRowBox = styled.View`
  flexDirection: row;
  alignItems: center;
`

export const NomalImage = styled.Image`
  width: ${w(1.2)}px;
  height: ${h(0.8)}px;
  margin: ${w(0.2)}px;
`
export const SmallText = styled.Text`
  fontSize: ${s(0.2)}px;
  color: #7e7c7c;
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