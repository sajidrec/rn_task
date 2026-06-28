import { Modal, View, Text, Button, Linking } from 'react-native';

import React from 'react'



const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.pathao.agent&hl=en';


const UpdateModal = () => {
  return (

    <Modal
      visible={true}
      transparent
      animationType="fade"
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            width: 300,
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 20,
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Update Available
          </Text>

          <Text style={{ marginVertical: 16 }}>
            A newer version of the app is available. Please update to continue.
          </Text>

          <Button
            title="Update"
            onPress={() => Linking.openURL(PLAY_STORE_URL)}
          />
        </View>
      </View>
    </Modal>
  )
}

export default UpdateModal
