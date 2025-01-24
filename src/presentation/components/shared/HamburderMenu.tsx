import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { IonIcon } from './IonIcon';

export const HamburderMenu = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>(
              <Pressable onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
                <IonIcon name='menu'/>
              </Pressable>
            )
        })
    },[]);
  return ( < ></> )
}

export default HamburderMenu
