import {
  FlaskLight,
  CertificateLight,
  RootLight,
  AtomLight,
} from "~/assets/icons";

interface Test {
  id: string;
  courseId: string;
  title: string;
  startDate: string;
  endDate: string;
  length: number;
}

type QuestionType = "multiple" | "essay";

type MultipleChoiceQuestion = {
  id: string;
  type: "multiple";
  question: string;
  options: string[];
  correctOptionIndex: number;
};

type EssayQuestion = {
  id: string;
  type: "essay";
  question: string;
  answer: string;
};

type Question = MultipleChoiceQuestion | EssayQuestion;

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  startDate: string;
  endDate: string;
  length: number;
  progress: number;
  image: any;
  questions: Question[];
}

export interface Course {
    id: string;
    title: string;
    progress: number;
    quizzes: Quiz[];
  }

export const quizzes: Quiz[] = [
  {
    id: "6787828e00372868f3aa",
    courseId: "678736200034f7738e81",
    title: "Basic Theoretical Python",
    startDate: "Kamis, 16 Januari 2025",
    endDate: "Kamis, 23 Januari 2025",
    length: 10,
    progress: 0,
    image: require("../../assets/images/computational-thinking.png"),
    questions: [
      {
        id: "6787828e00372868f3aa-1",
        type: "multiple",
        question:
          "Apa hasil dari sebuah algoritma pencarian biner jika elemen tidak ditemukan?",
        options: [
          "Elemen ditemukan",
          "Elemen dihapus",
          "Elemen tidak ditemukan",
          "Error terjadi",
        ],
        correctOptionIndex: 2,
      },
      {
        id: "6787828e00372868f3aa-2",
        type: "multiple",
        question: "Mana yang bukan tipe data dalam Python?",
        options: ["Integer", "String", "Loop", "Boolean"],
        correctOptionIndex: 2,
      },
      {
        id: "6787828e00372868f3aa-3",
        type: "multiple",
        question: "Apa yang dimaksud dengan looping dalam pemrograman?",
        options: [
          "Proses iterasi",
          "Proses menghentikan program",
          "Proses menghapus data",
          "Proses debugging",
        ],
        correctOptionIndex: 0,
      },
      {
        id: "6787828e00372868f3aa-4",
        type: "essay",
        question: "Sebutkan dua manfaat dari algoritma sorting.",
        answer:
          "Manfaat algoritma sorting: 1. Memudahkan pencarian data, 2. Mengoptimalkan penggunaan memori",
      },
      {
        id: "6787828e00372868f3aa-5",
        type: "essay",
        question: "Jelaskan fungsi logika AND dalam pemrograman.",
        answer:
          "Fungsi logika AND menghasilkan nilai true hanya jika kedua operand bernilai true.",
      },
    ],
  },
  {
    id: "678a4720002906d76ec0",
    courseId: "678736530036ec3c4350",
    title: "Basic Theoretical Math",
    startDate: "Senin, 01 Februari 2025",
    endDate: "Senin, 08 Februari 2025",
    length: 10,
    progress: 0,
    image: require("../../assets/images/math.png"),
    questions: [
      {
        id: "678a4720002906d76ec0-1",
        type: "multiple",
        question: "Apa yang dimaksud dengan sebuah matriks?",
        options: [
          "Susunan angka dalam tabel",
          "Angka acak dalam satu baris",
          "Persamaan aljabar",
          "Fungsi kalkulus",
        ],
        correctOptionIndex: 0,
      },
      {
        id: "678a4720002906d76ec0-2",
        type: "multiple",
        question: "Jika Anda menambahkan dua matriks, apa yang harus sama?",
        options: [
          "Jumlah elemen",
          "Ukuran baris dan kolom",
          "Warna matriks",
          "Jumlah angka",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "678a4720002906d76ec0-3",
        type: "multiple",
        question: "Mana yang merupakan matriks identitas?",
        options: [
          "Matriks dengan semua elemen nol",
          "Matriks dengan angka di diagonal utama satu",
          "Matriks persegi panjang",
          "Matriks tiga dimensi",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "678a4720002906d76ec0-4",
        type: "essay",
        question:
          "Sebutkan tiga contoh aplikasi matriks dalam kehidupan nyata.",
        answer:
          "Contoh aplikasi matriks: 1. Grafik Komputer, 2. Kriptografi, 3. Pemrosesan Citra",
      },
      {
        id: "678a4720002906d76ec0-5",
        type: "essay",
        question:
          "Jelaskan apa yang terjadi ketika sebuah matriks dikalikan dengan matriks identitas.",
        answer:
          "Ketika sebuah matriks dikalikan dengan matriks identitas, hasilnya adalah matriks itu sendiri.",
      },
    ],
  },
  {
    id: "q3",
    courseId: "3", 
    title: "Basic Theoretical Chemistry",
    startDate: "Senin, 01 Februari 2025",
    endDate: "Date",
    length: 10,
    progress: 0,
    image: require("../../assets/images/kimia.png"),
    questions: [
      {
        id: "q3-1",
        type: "multiple",
        question: "Unsur dengan nomor atom satu adalah:",
        options: ["Oksigen", "Helium", "Hidrogen", "Karbon"],
        correctOptionIndex: 2,
      },
      {
        id: "q3-2",
        type: "multiple",
        question: "Apa nama senyawa dengan rumus kimia H₂O₂?",
        options: [
          "Air",
          "Hidrogen peroksida",
          "Asam sulfat",
          "Karbon dioksida",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q3-3",
        type: "multiple",
        question: "Mana yang termasuk gas mulia?",
        options: ["Neon", "Nitrogen", "Oksigen", "Hidrogen"],
        correctOptionIndex: 0,
      },
      {
        id: "q3-4",
        type: "essay",
        question: "Jelaskan perbedaan antara senyawa dan campuran.",
        answer:
          "Senyawa adalah zat yang terbentuk dari dua atau lebih unsur yang berbeda yang terikat secara kimia, sedangkan campuran adalah kombinasi dari dua atau lebih zat yang tidak terikat secara kimia.",
      },
      {
        id: "q3-5",
        type: "essay",
        question:
          "Sebutkan tiga contoh senyawa asam yang sering digunakan dalam kehidupan sehari-hari.",
        answer:
          "Contoh senyawa asam: 1. Asam asetat (cuka), 2. Asam sitrat (jeruk), 3. Asam klorida (lambung)",
      },
    ],
  },
  {
    id: "q4",
    courseId: "4",
    title: "Basic Theoretical Physics",
    startDate: "Senin, 01 Februari 2025",
    endDate: "Date",
    length: 10,
    progress: 0,
    image: require("../../assets/images/fisika.png"),
    questions: [
      {
        id: "q4-1",
        type: "multiple",
        question: "Apa yang dimaksud dengan percepatan?",
        options: [
          "Perubahan posisi",
          "Perubahan kecepatan terhadap waktu",
          "Perubahan arah gerak",
          "Kecepatan awal suatu benda",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "q4-2",
        type: "multiple",
        question: "Apa satuan gaya dalam SI?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correctOptionIndex: 0,
      },
      {
        id: "q4-3",
        type: "multiple",
        question: "Berapa besar gravitasi di permukaan bumi?",
        options: ["5 m/s²", "9,8 m/s²", "10 m/s²", "20 m/s²"],
        correctOptionIndex: 1,
      },
      {
        id: "q4-4",
        type: "essay",
        question:
          "Sebutkan dua contoh penerapan hukum Newton dalam kehidupan sehari-hari.",
        answer:
          "Contoh penerapan hukum Newton: 1. Mendorong mobil, 2. Berjalan kaki",
      },
      {
        id: "q4-5",
        type: "essay",
        question:
          "Jelaskan perbedaan antara energi kinetik dan energi potensial.",
        answer:
          "Energi kinetik adalah energi yang dimiliki benda karena gerakannya, sedangkan energi potensial adalah energi yang dimiliki benda karena posisinya.",
      },
    ],
  },
];

export const tests: Test[] = [
  {
    id: "t1",
    courseId: "678736200034f7738e81",
    title: "Test 1: Berpikir Komputasional",
    startDate: "Kamis, 30 Januari 2025",
    endDate: "Kamis, 30 Januari 2025",
    length: 10,
  },
  {
    id: "t2",
    courseId: "678736530036ec3c4350",
    title: "Test 1: Matematika I",
    startDate: "Jumat, 31 Januari 2025",
    endDate: "Jumat, 31 Januari 2025",
    length: 10,
  },
  {
    id: "t3",
    courseId: "3",
    title: "Test 1: Kimia I",
    startDate: "Senin, 3 Februari 2025",
    endDate: "Senin, 3 Februari 2025",
    length: 20,
  },
  {
    id: "t4",
    courseId: "4",
    title: "Test 1: Fisika I",
    startDate: "Selasa, 4 Februari 2025",
    endDate: "Selasa, 4 Februari 2025",
    length: 20,
  },
];

export const courses = [
  {
    id: "1",
    term: "Semester 1",
    test: "1",
    quiz: 1,
    title: "Berpikir Komputasional",
    icon: CertificateLight,
    progress: 0,
    image: require("../../assets/images/computational-thinking.png"),
    quizzes: quizzes.filter((quiz) => quiz.courseId === "1"),
    tests: tests.filter((test) => test.courseId === "1"),
  },
  {
    id: "2",
    term: "Semester 1",
    test: "1",
    quiz: 1,
    title: "Matematika I",
    icon: RootLight,
    progress: 0,
    image: require("../../assets/images/math.png"),
    quizzes: quizzes.filter((quiz) => quiz.courseId === "2"),
    tests: tests.filter((test) => test.courseId === "2"),
  },
  {
    id: "3",
    term: "Semester 1",
    test: "1",
    quiz: 1,
    title: "Kimia I",
    icon: FlaskLight,
    progress: 0,
    image: require("../../assets/images/kimia.png"),
    quizzes: quizzes.filter((quiz) => quiz.courseId === "3"),
    tests: tests.filter((test) => test.courseId === "3"),
  },
  {
    id: "4",
    term: "Semester 1",
    test: "1",
    quiz: 1,
    title: "Fisika I",
    icon: AtomLight,
    progress: 0,
    image: require("../../assets/images/fisika.png"),
    quizzes: quizzes.filter((quiz) => quiz.courseId === "4"),
    tests: tests.filter((test) => test.courseId === "4"),
  },
];
