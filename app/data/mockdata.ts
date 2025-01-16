import {
  FlaskLight,
  CertificateLight,
  RootLight,
  AtomLight,
} from "~/assets/icons";

interface Quiz {
  id: string;
  courseId: string;
  title: string;
  startDate: string;
  endDate: string;
  length: number;
}

interface Test {
  id: string;
  courseId: string;
  title: string;
  startDate: string;
  endDate: string;
  length: number;
}

export const quizzes: Quiz[] = [
  {
    id: "q1",
    courseId: "1",
    title: "Basic Theoretical Python",
    startDate: "Kamis, 16 Januari 2025",
    endDate: "Kamis, 23 Januari 2025",
    length: 20,
  },
  {
    id: "q2",
    courseId: "2",
    title: "Basic Theoretical Matrix",
    startDate: "Jumat, 17 Januari 2025",
    endDate: "Jumat, 24 Januari 2025",
    length: 30,
  },
  {
    id: "q3",
    courseId: "3",
    title: "Basic Theoretical Chemistry",
    startDate: "Senin, 20 Januari 2025",
    endDate: "Senin, 27 Januari 2025",
    length: 25,
  },
  {
    id: "q4",
    courseId: "4",
    title: "Basic Theoretical Physics",
    startDate: "Selasa, 21 Januari 2025",
    endDate: "Selasa, 28 Januari 2025",
    length: 30,
  },
];

export const tests: Test[] = [
  {
    id: "t1",
    courseId: "1",
    title: "Test 1: Berpikir Komputasional",
    startDate: "Kamis, 30 Januari 2025",
    endDate: "Kamis, 30 Januari 2025",
    length: 120,
  },
  {
    id: "t2",
    courseId: "2",
    title: "Test 1: Matematika I",
    startDate: "Jumat, 31 Januari 2025",
    endDate: "Jumat, 31 Januari 2025",
    length: 90,
  },
  {
    id: "t3",
    courseId: "3",
    title: "Test 1: Kimia I",
    startDate: "Senin, 3 Februari 2025",
    endDate: "Senin, 3 Februari 2025",
    length: 100,
  },
  {
    id: "t4",
    courseId: "4",
    title: "Test 1: Fisika I",
    startDate: "Selasa, 4 Februari 2025",
    endDate: "Selasa, 4 Februari 2025",
    length: 100,
  },
];

export const courses = [
  {
    id: "1",
    term: "Semester 1",
    test: "0",
    quiz: 2,
    title: "Berpikir Komputasional",
    icon: CertificateLight,
    image: require("../../assets/images/computational-thinking.png"),
    quizzes: quizzes.filter(quiz => quiz.courseId === "1"),
    tests: tests.filter(test => test.courseId === "1")
  },
  {
    id: "2",
    term: "Semester 1",
    test: "1",
    quiz: 2,
    title: "Matematika I",
    icon: RootLight,
    image: require("../../assets/images/math.png"),
    quizzes: quizzes.filter(quiz => quiz.courseId === "2"),
    tests: tests.filter(test => test.courseId === "2")
  },
  {
    id: "3",
    term: "Semester 1",
    test: "1",
    quiz: 2,
    title: "Kimia I",
    icon: FlaskLight,
    image: require("../../assets/images/kimia.png"),
    quizzes: quizzes.filter(quiz => quiz.courseId === "3"),
    tests: tests.filter(test => test.courseId === "3")
  },
  {
    id: "4",
    term: "Semester 1",
    test: "1",
    quiz: 2,
    title: "Fisika I",
    icon: AtomLight,
    image: require("../../assets/images/fisika.png"),
    quizzes: quizzes.filter(quiz => quiz.courseId === "4"),
    tests: tests.filter(test => test.courseId === "4")
  },
];
