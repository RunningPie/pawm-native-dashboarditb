import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, RefreshControl, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePathname } from 'expo-router'
import HorizontalScroll from '../components/HorizontalScroll'
import { getAllContent, signOut } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'

const Dashboard = () => {

  const { data: courses, refetchCourses } = useAppwrite(getAllContent, "courses");
  const { data: quizzes, refetchQuizzes } = useAppwrite(getAllContent, "quizzes");
  const { data: tests, refetchTests } = useAppwrite(getAllContent, "tests");

  console.log("Courses: ", courses);
  console.log("Quizzes: ", quizzes);
  console.log("Tests: ", tests);

  // Variabel buat handle refresh
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetchCourses();
    await refetchQuizzes();
    await refetchTests();
    setRefreshing(false);
  }

  const handleLogout = async () => {
    signOut();
  }

  // Ini variable punyanya search bar (component)
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  return (
    <SafeAreaView>
      <Text>Dashboard</Text>
      <TouchableOpacity
        onPress={ handleLogout }
      >
        <Text>Logout</Text> 
      </TouchableOpacity>

      {/* Ini ngikutin tutorial dulu hehe */}
      {/* Harusnya gaperlu flatlist yg vertical sih
          Nanti di bawah ada flatlist yg horizontal
          Aku buat jadi component juga
          ~ Dama
      */}
      <FlatList

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
                contents={ courses ?? [] }
                contentType={ "courses" }
              />
            </View>

            <View>
              <Text>
                Quizzes
              </Text>
              {/* Ini komponen horizontal scroll aku buat dulu, buat bantu visualisasiin backend */}
              {/* Nanti kalo ga kepake, ganti aja */}
              <HorizontalScroll 
                contents={ quizzes ?? [] }
                contentType={ "quizzes" }
              />
            </View>

            <View>
              <Text>
                Tests
              </Text>
              {/* Ini komponen horizontal scroll aku buat dulu, buat bantu visualisasiin backend */}
              {/* Nanti kalo ga kepake, ganti aja */}
              <HorizontalScroll 
                contents={ tests ?? [] }
                contentType={ "tests" }
              />
            </View>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({})