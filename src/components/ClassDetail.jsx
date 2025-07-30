import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EvaluationTable from "./EvauationTable"; 
// Giả lập dữ liệu
const fakeCourses = [
  {
    id: "1",
    title: "Khoá học Wedo",
    description: "Học Robotics từ cơ bản đến nâng cao",
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
    classes: [],
  },
];

// Giả lập 24 buổi học
const classSessions = Array.from({ length: 24 }, (_, i) => ({
  number: i + 1,
  topic: `Lesson ${i + 1}: Chủ đề ${i + 1}`,
  date: `2025-08-${String(i + 1).padStart(2, "0")}`,
}));

// === 🧑‍🎓 COMPONENT ===
const ClassEvaluation = () => {
  const { courseId, classId } = useParams();
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [classInfo, setClassInfo] = useState(null);
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
    { id: 3, name: "Lê Văn C" },
  ]);
  const criteria = [
    { label: "📋 Điểm danh", fields: ["Điểm danh"] },
    { label: "😊 Thái độ", fields: ["Thái độ"] },
    { label: "🔧 Mô hình", fields: ["Mô hình - Tiến độ", "Mô hình - Sáng tạo"] },
    { label: "🧠 Tốc độ tiếp thu", fields: ["Tốc độ tiếp thu kiến thức mới"] },
    { label: "🗣️ Phát biểu", fields: ["Tinh thần phát biểu"] },
    { label: "💻 Thao tác", fields: ["Thao tác máy tính"] },
    { label: "🎨 Dự án", fields: ["Hoàn thành, phát triển, sáng tạo dự án"] },
    { label: "📝 Ý kiến khác", fields: ["Ý kiến khác"] },
  ];
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudentName, setNewStudentName] = useState("");

  const currentSession = classSessions[currentSessionIndex];
  const allFields = criteria.flatMap((c) => c.fields);

  const [evaluations, setEvaluations] = useState(
    students.map(() =>
      allFields.reduce((acc, field) => {
        acc[field] = "";
        return acc;
      }, {})
    )
  );

  const handleChange = (studentIndex, field, value) => {
    const newEvaluations = [...evaluations];
    newEvaluations[studentIndex][field] = value;
    setEvaluations(newEvaluations);
  };

  const handleSave = () => {
    const result = students.map((student, index) => ({
      student,
      evaluations: evaluations[index],
    }));
    console.log("Dữ liệu nhận xét:", result);
    alert("💾 Đã lưu đánh giá thành công!");
  };

  useEffect(() => {
    const course = fakeCourses.find((c) => c.id === courseId);
    const foundClass = course?.classes.find((cls) => cls.id === classId);
    setClassInfo(foundClass || null);
  }, [courseId, classId]);

  const handlePrev = () => {
    setCurrentSessionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentSessionIndex((prev) =>
      Math.min(prev + 1, classSessions.length - 1)
    );
  };

  const handleAddStudent = () => {
    if (newStudentName.trim()) {
      const newStudent = {
        id: Date.now(),
        name: newStudentName.trim(),
      };
      const newEval = {};
      allFields.forEach((field) => {
        newEval[field] = "";
      });
  setEvaluations([...evaluations, newEval]);
      setStudents((prev) => [...prev, newStudent]);
      setNewStudentName("");
      setShowAddStudent(false);
    }
  };

  const handleUpdate = (studentId, field, value) => {
    console.log("update", { studentId, field, value });
  };

  if (!classInfo) {
    return (
      <div className="p-8 text-red-500 bg-white min-h-screen">
        Không tìm thấy thông tin lớp học.
      </div>
    );
  }

  return (
    <div className="p-6 bg-cyan-50 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-2">
        <span className="text-cyan-600 font-semibold">🏠 Trang chủ</span> / {classInfo.name}
      </p>

      {/* Title */}
      <div className="bg-cyan-100 p-6 rounded-xl shadow-sm mb-6 border border-cyan-200">
        <h1 className="text-3xl font-bold text-cyan-700 mb-1">{classInfo.name}</h1>
        <p className="text-gray-700 text-lg">
          Giáo viên phụ trách:{" "}
          <span className="font-semibold text-cyan-800">{classInfo.teacher}</span>
        </p>
      </div>

      {/* Session Navigation */}
      <div className="flex items-center justify-between bg-white rounded-xl p-4 mb-6 border border-cyan-200 shadow">
        <button
          onClick={handlePrev}
          disabled={currentSessionIndex === 0}
          className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow disabled:opacity-40"
        >
          ← Buổi trước
        </button>
        <div className="text-center">
          <p className="font-bold text-lg text-cyan-700">
            🗓️ Buổi {currentSession.number} / 24
          </p>
          <p className="text-gray-600 italic">{currentSession.topic}</p>
          <p className="text-sm text-gray-400">{currentSession.date}</p>
        </div>
        <button
          onClick={handleNext}
          disabled={currentSessionIndex === classSessions.length - 1}
          className="bg-cyan-500 text-white px-4 py-2 rounded-full shadow disabled:opacity-40"
        >
          Buổi sau →
        </button>
      </div>

      {/* Add Student */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-800">Đánh giá lớp học</h2>
        <button
          onClick={() => setShowAddStudent(!showAddStudent)}
          className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-xl shadow transition-all duration-200"
        >
          + Thêm học sinh
        </button>
      </div>

      {showAddStudent && (
        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Nhập tên học sinh"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
            className="border border-blue-300 rounded px-3 py-2 w-64"
          />
          <button
            onClick={handleAddStudent}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Lưu
          </button>
        </div>
      )}

      {/* Evaluation Table */}
      <div className="overflow-x-auto">
        <EvaluationTable students={students} evaluations={evaluations} onUpdate={handleUpdate} onChange={handleChange} onClick={handleSave} allFields={allFields} criteria={criteria}/>
      </div>
    </div>
  );
};

export default ClassEvaluation;
