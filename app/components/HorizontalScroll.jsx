import { View, Text, FlatList } from 'react-native'
import React from 'react'

const HorizontalScroll = ( {items} ) => {
  return (
    <FlatList
        data = {items}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
            <Text>{ item.id }</Text>
          )}
          horizontal={true} // ini biar flatlistnya horizontal
    />
  )
}

export default HorizontalScroll