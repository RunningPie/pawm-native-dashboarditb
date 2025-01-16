import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import {
  CertificateLight,
  RootLight,
  FlaskLight,
  AtomLight,
} from "~/assets/icons";

export default function CourseDetail() {
  const { id } = useLocalSearchParams();

  // Example mock data
  const courses = [
    {
      id: "1",
      term: "Semester 1",
      test: "0",
      quiz: 2,
      title: "Berpikir Komputasional",
      icon: CertificateLight,
      image: require("../../../assets/images/computational-thinking.png"),
    },
    {
      id: "2",
      term: "Semester 1",
      test: "1",
      quiz: 2,
      title: "Matematika I",
      icon: RootLight,
      image: require("../../../assets/images/math.png"),
    },
    {
      id: "3",
      term: "Semester 1",
      test: "1",
      quiz: 2,
      title: "Kimia I",
      icon: FlaskLight,
      image: require("../../../assets/images/kimia.png"),
    },
    {
      id: "4",
      term: "Semester 1",
      test: "1",
      quiz: 2,
      title: "Fisika I",
      icon: AtomLight,
      image: require("../../../assets/images/fisika.png"),
    },
  ];

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <View style={styles.container}>
        <Text>Course not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={course.image} style={styles.courseImage} />
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.subtitle}>{course.term}</Text>
      <Text>{course.test} Test</Text>
      <Text>{course.quiz} Quiz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "white" },
  courseImage: { width: "100%", height: 200, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  subtitle: { fontSize: 16, marginBottom: 8 },
});
