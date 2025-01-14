import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Dashboard = () => {
  return (
    <SafeAreaView>
      <Text>Dashboard</Text>
      <FlatList
        data={[
          { id: '1', title: 'Item 1' },
          { id: '2', title: 'Item 2' },
          { id: '3', title: 'Item 3' },
          // Add more items here
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{ item.title }</Text>
        )}
      />
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({})