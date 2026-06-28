import { View } from 'react-native'
import React from 'react'

const SizedBox = ({ height = 0, width = 0 }) => {
  return (
    <View style={{ height, width }} />
  )
}

export default SizedBox