import React, { useState } from "react";

const ClassDialog = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    className: "",
    teacherName: "",
    startDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.className && formData.teacherName && formData.startDate) {
      onCreate(formData); // gọi hàm tạo lớp bên ngoài
      onClose(); // đóng dialog
    } else {
      alert("Vui lòng nhập đầy đủ thông tin.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h2 className="text-xl font-bold text-center mb-4 text-cyan-700">Tạo lớp học mới</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tên lớp</label>
            <input
              type="text"
              name="className"
              value={formData.className}
              onChange={handleChange}
              className="w-full border border-cyan-300 rounded-md p-2 focus:outline-cyan-500"
              placeholder="Ví dụ: Lớp 3A"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tên giáo viên</label>
            <input
              type="text"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleChange}
              className="w-full border border-cyan-300 rounded-md p-2 focus:outline-cyan-500"
              placeholder="Ví dụ: Cô Lan"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Thời gian bắt đầu</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border border-cyan-300 rounded-md p-2 focus:outline-cyan-500"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
            >
              Tạo lớp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassDialog;
