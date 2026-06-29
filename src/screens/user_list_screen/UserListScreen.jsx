import { View, Text, Image, FlatList } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './UserListScreen.styles'
import { FlashList } from '@shopify/flash-list';

const UserCard = React.memo(({ item }) => {
  // console.log("UserCard: ", item.id);

  const renderCount = React.useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    console.log("🟢 MOUNTED instance for user:", item.id);
    return () => console.log("🔴 UNMOUNTED instance for user:", item.id);
  }, []);

  return (<View style={styles.card}>
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
  </View>)
});

const UserListScreen = ({ route }) => {

  console.log('user list screen rendered');

  const { userData } = route.params;

  const renderItems = useCallback(
    ({ item }) => <UserCard item={item} />,
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        // debug={true}
        data={userData}
        keyExtractor={(user) => user.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        estimatedItemSize={120} // without estimated item size it's not that much worth
        // initialNumToRender={10}
        // maxToRenderPerBatch={10}
        // windowSize={5}
        // removeClippedSubviews={true}
      />
    </SafeAreaView>
  )
}

export default UserListScreen