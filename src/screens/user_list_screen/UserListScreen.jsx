import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './UserListScreen.styles'

const UserListScreen = ({ route }) => {

  const { userData } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={userData}
        keyExtractor={(user) => user.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.photo }}
              style={styles.avatar}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.username}</Text>
              <Text style={styles.designation}>{item.designation}</Text>

              <Text style={styles.text}>📧 {item.email}</Text>
              <Text style={styles.text}>📍 {item.city}</Text>
              <Text style={styles.text}>📞 {item.phone}</Text>
            </View>
          </View>
        )}

      />
    </SafeAreaView>
  )
}

export default UserListScreen