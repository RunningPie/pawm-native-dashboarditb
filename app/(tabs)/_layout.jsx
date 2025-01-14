import { StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="riwayat"
        options={{ headerShown: false }}
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})