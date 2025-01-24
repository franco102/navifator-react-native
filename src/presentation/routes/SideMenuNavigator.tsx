import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import AboutScreen from '../screens/aboout/AboutScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const  SideMenuNavigator=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
} 
