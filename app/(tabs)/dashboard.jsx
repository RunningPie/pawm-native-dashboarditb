import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, RefreshControl, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePathname } from 'expo-router'
import HorizontalScroll from '../components/HorizontalScroll'
import { getAllCourses } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'

const Dashboard = () => {

  const { data: courses, refetch } = useAppwrite(getAllCourses);

  console.log(courses);

  // Variabel buat handle refresh
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  // Ini variable punyanya search bar (component)
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView>
      <Text>Dashboard</Text>

      {/* Ini ngikutin tutorial dulu hehe */}
      {/* Harusnya gaperlu flatlist yg vertical sih
          Nanti di bawah ada flatlist yg horizontal
          Aku buat jadi component juga
          ~ Dama
      */}
      <FlatList
        // data={[
        //   { id: '1', title: 'Item 1' },
        //   { id: '2', title: 'Item 2' },
        //   { id: '3', title: 'Item 3' },
        //   // Add more items here
        // ]}
        data={courses}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            {/* ini masih belum muncul cover_imagenya gatau kenapa wkwkwk */}
            {/* tapi datanya udah keload kok, bisa liat di console log */}
            <Image source={{ uri: item.cover_image }} resizeMode='contain' />
            <Text>{item.course_title}</Text>
          </View>
        )}        

        // Ini semua dirender di atas data
        // Bisa diganti pake header component dan langsung dirender di atas flatlistnya aja
        ListHeaderComponent={ () => (
          <View>
            <View>
              <Text>Welcome Back, </Text>
              <Text>John Doe!</Text>
            </View>

            {/* Ini Search Bar */}
            {/* Nanti bikin component biar rapi :D */}
            <TextInput 
              // value={value}
              placeholder='Search for ...'
              onChangeText={(e) => setQuery(e)}
            />
            <TouchableOpacity>
              {/* Nanti bisa diganti pake search icon */}
              <Text>Search</Text> 
            </TouchableOpacity>

            <View>
              <Text>
                Courses
              </Text>
              {/* Ini komponen horizontal scroll aku buat dulu, buat bantu visualisasiin backend */}
              {/* Nanti kalo ga kepake, ganti aja */}
              <HorizontalScroll 
                items={ [ {id: 1}, {id: 2}, {id:3} ] ?? [] }
              />
            </View>
          </View>
        )}

        // Dalam kasus ga ada data course
        ListEmptyComponent={() => (
          // Kalo niat bikin ini jadi component bagus sih :D
          // tapi kan data kita udh diseeding ya, jadi hrsnya gaada kasus empty list
          <Text>No data available</Text>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({})