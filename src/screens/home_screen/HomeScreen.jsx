import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './HomeScreen.styles';
import SizedBox from '../../components/SizedBox'
import { useNavigation } from '@react-navigation/native';
import apiClient from '../../api/apiClient'
import ENDPOINTS from '../../api/endPoints'
import { APP_VERSION } from '@env'
import { compareVersions } from 'compare-versions';
import UpdateModal from '../../components/UpdateModal'

export default function HomeScreen() {
  console.log('Home screen rendered');

  const navigation = useNavigation();

  const [loader, setLoader] = useState(false);
  const [updateRquired, setUpdateRquired] = useState(false);

  const fetchUserData = useCallback(async () => {
    setLoader(true);
    console.log('Fetching user data');

    const data = await apiClient.get(ENDPOINTS.USERS);

    console.log('response header', data.headers['x-app-version']);
    console.log('device app version', APP_VERSION);

    const serverAppVersion = data.headers['x-app-version'];
    const deviceAppVersion = APP_VERSION;

    console.log('user data -> ', data.data);


    setLoader(false);


    if (compareVersions(serverAppVersion, deviceAppVersion) !== 0) {


      setUpdateRquired(true);
      return;
    }



    return navigation.navigate('UserListScreen', {
      userData: data.data,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {updateRquired ? <UpdateModal /> : <View >

        <Pressable style={styles.btnDesign} onPress={() => navigation.navigate('CounterScreen')}>
          <Text style={styles.headerText}>Goto Counter</Text>
        </Pressable>

        <SizedBox height={10} />

        {loader ? <ActivityIndicator color={'#fff'} size={30} /> :
          <Pressable style={styles.btnDesign} onPress={fetchUserData}>
            <Text style={styles.headerText}>Goto User List</Text>
          </Pressable>
        }

      </View>}

    </SafeAreaView>

  )
}