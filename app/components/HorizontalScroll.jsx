import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

const HorizontalScroll = ( {contents, contentType} ) => {
  return (
    <FlatList
        data = {contents}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            {/* ini masih belum muncul cover_imagenya gatau kenapa wkwkwk */}
            {/* tapi datanya udah keload kok, bisa liat di console log */}
            <Text>{item.cover_image ?? "No Cover Image Data"}</Text>
            {contentType === 'courses' ? (
              <View>
                <Text>{item.semester}</Text>
                <Text>{item.course_title}</Text>
                <Text>Test: {item.num_of_tests}</Text>
                <Text>Quiz: {item.num_of_quizzes}</Text>
              </View>
            ) : (
              <View>
                <Text>{item.parent_course.cover_image}</Text>
                <Text>{item.test_title}</Text>
              </View>
            )}
          </View>
        )}
        horizontal={true} // ini biar flatlistnya horizontal
        // Dalam kasus ga ada data
        ListEmptyComponent={() => (
          // Kalo niat bikin ini jadi component bagus sih :D
          // tapi kan data kita udh diseeding ya, jadi hrsnya gaada kasus empty list
          <Text>No data available</Text>
        )}
    />
  )
}

export default HorizontalScroll