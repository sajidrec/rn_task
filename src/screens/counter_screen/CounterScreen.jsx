import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './CounterScreen.styles'
import { useReducer } from 'react'

const CounterScreen = () => {
  console.log('Counter screen rendered');

  const counterObject = {
    counter: 0,
  }


  const reducer = (state, action) => {

    console.log('counter reducer called');

    switch (action.type) {
      case 'increment':
        return {
          counter: state.counter + 1,
        };

      case 'decrement':
        return {
          counter: state.counter - 1,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, counterObject);





  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: 'row' }}>

        <Pressable onPress={() => dispatch({ type: 'increment' })}>
          <Text style={styles.headerText}> + </Text>
        </Pressable>

        <Text style={styles.headerText}>
          {state.counter}
        </Text>

        <Pressable onPress={() => dispatch({ type: 'decrement' })}>
          <Text style={styles.headerText}> - </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  )
}

export default CounterScreen