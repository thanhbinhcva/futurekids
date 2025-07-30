// mockData.js
import Wedo from "../assets/R.jpg";

export const fakeCourses = [
  {
    id: "1",
    title: "Khoá học Wedo",
    description: "Học Robotics từ cơ bản đến nâng cao",
    image: Wedo,
    classes: [
      { id: "a", name: "Lớp sáng thứ 7 (9h-10h30)", students: "5", teacher: "Thanh Bình" },
      { id: "b", name: "Lớp sáng thứ 7 (10h30-12h)", students: "6", teacher: "Trần vinh" },
      { id: "c", name: "Lớp sáng chủ nhật (9h-10h30)", students: "2", teacher: "Thanh Bình" },
      { id: "d", name: "Lớp chiều chủ nhật (15h-16h30)", students: "3", teacher: "Trần Vinh" },
      { id: "e", name: "Lớp chiều thứ 7 (16h-17h30)", students: "4", teacher: "Thanh Bình" },
    ],
  },
  {
    id: "2",
    title: "Khoá học NodeJS",
    description: "Xây dựng server với NodeJS",
    image: Wedo,
    classes: [],
  },
];
