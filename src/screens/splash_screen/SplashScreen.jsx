import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './SplashScreen.styles'
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {

  const navigation = useNavigation();


  useEffect(() => {
    console.log('Splash screen useEffect called');

    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => {
      console.log('Splash screen unmounted');
      clearTimeout(timer);
    }
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.headerText}>
          Splash Screen
        </Text>
        <ActivityIndicator color={'#faf6f6'} size={20} />
      </View>
    </SafeAreaView>

  )
}