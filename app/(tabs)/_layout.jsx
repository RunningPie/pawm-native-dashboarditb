import { StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})