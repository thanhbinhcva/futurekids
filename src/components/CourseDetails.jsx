import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ⬅️ thêm useNavigate
import Wedo from "../assets/R.jpg";

const fakeCourses = [
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

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate(); // ⬅️ khởi tạo navigate
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFakeCourse = () => {
      const foundCourse = fakeCourses.find((c) => c.id === courseId);
      setCourse(foundCourse);
      setLoading(false);
    };
    fetchFakeCourse();
  }, [courseId]);

  const handleClassClick = (classId) => {
    navigate(`/courses/${courseId}/classes/${classId}`);
  };

  if (loading) {
    return <div className="p-8 text-gray-500">Đang tải dữ liệu...</div>;
  }

  if (!course) {
    return <div className="p-8 text-red-500">Không tìm thấy khoá học.</div>;
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      <p className="text-gray-500 mb-2">
        <span className="text-blue-500">Home</span> / {course.title}
      </p>

      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-6">{course.description}</p>

      {course.image && (
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-xl shadow mb-8"
        />
      )}

      <h2 className="text-2xl font-semibold mb-4">Danh sách lớp học</h2>

      {course.classes?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.classes.map((cls, index) => (
            <div
              key={cls.id}
              onClick={() => handleClassClick(cls.id)} // ⬅️ bắt sự kiện click
              className="cursor-pointer rounded-lg border shadow-sm overflow-hidden hover:shadow-lg transition bg-white"
            >
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{cls.name}</h3>
                <p className="text-sm text-gray-700">
                  Số học sinh: {cls.students}
                </p>
                <p className="text-sm text-gray-500">
                  Buổi học: {index + 1} / 24
                </p>
                <p className="text-sm text-gray-500">
                  Giáo viên: {cls.teacher}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Chưa có lớp học nào trong khoá này.</p>
      )}
    </div>
  );
};

export default CourseDetailPage;
