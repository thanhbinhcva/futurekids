import React, { useState } from "react";

const OrderStatusModal = ({ order, onClose, onUpdate }) => {
  const [status, setStatus] = useState(order.status || "");
  const [date, setDate] = useState(order.date || "");
  const [time, setTime] = useState(order.time || "");

  const handleSubmit = () => {
    const updatedOrder = {
      ...order,
      status,
      date,
      time,
    };
    onUpdate(updatedOrder); // Gửi dữ liệu về component cha
    onClose(); // Đóng modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[400px]">
        <div className="text-green-600 font-bold">[{order.code}]</div>
        <div className="mb-4">Last Status: <strong>{order.lastStatus}</strong></div>

        <label className="block mb-2">Date</label>
        <input type="date" className="w-full border rounded p-2 mb-4" value={date} onChange={(e) => setDate(e.target.value)} />

        <label className="block mb-2">Time</label>
        <input type="time" className="w-full border rounded p-2 mb-4" value={time} onChange={(e) => setTime(e.target.value)} />

        <label className="block mb-2">Status</label>
        <select className="w-full border rounded p-2 mb-4" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Chọn trạng thái</option>
          <option value="Shipment Picked Up">Shipment Picked Up</option>
          <option value="Shipment Readied for Dispatch">Shipment Readied for Dispatch</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
        </select>

        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Update Status</button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusModal