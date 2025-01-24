import {  View } from 'react-native'
import { globalStyles } from '../../theme/theme' 
import PrimaryButton from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => { 
  const navigator = useNavigation<NavigationProp<RootStackParams>>();  
  return (
    <View style={globalStyles.container}>
      <PrimaryButton label='Productos' onPress={()=>navigator.navigate('Products')}/>
      <PrimaryButton label='Settings' onPress={()=>navigator.navigate('Settings')}/>
      
    </View>
  )
}
