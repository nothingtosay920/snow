import { NavigationFunctionComponent } from 'react-native-navigation';
import { View, FlatList } from 'react-native'

const Competition: NavigationFunctionComponent = (props) => {

  
  return (
    <>
      <View>职业赛事</View>
      <FlatList 
        data = {data}
      >

      </FlatList>
    </>
  );
}