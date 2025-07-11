import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const ShipmentDetail = () => {
  const { id } = useParams();

  const [statuses, setStatuses] = useState([
    { date: "17 Feb 2024", time: "11:05", status: "Shipment Readied for Dispatch" },
    { date: "18 Feb 2024", time: "09:58", status: "Shipment Picked Up" },
    { date: "15 Feb 2024", time: "09:48", status: "Shipment Information Received" },
  ]);

  const handleDeleteStatus = (index) => {
    const updated = statuses.filter((_, i) => i !== index);
    setStatuses(updated);
  };

  return (
    // <div className="min-h-screen bg-white-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Chi tiết đơn hàng - #{id}
        </h2>

        {/* Add Status */}
        <div className="bg-blue-50 p-6 rounded-lg mb-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Thêm trạng thái vận chuyển</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input type="date" className="border p-2 rounded-md w-full" />
            <input type="time" className="border p-2 rounded-md w-full" />
            <select className="border p-2 rounded-md w-full">
              <option>Chọn trạng thái</option>
              <option value="dispatched">Dispatched</option>
              <option value="delivered">Delivered</option>
              <option value="readied">Readied for Dispatch</option>
              <option value="intransit">In Transit</option>
              <option value="picked">Picked Up</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2">
              Thêm
            </button>
          </div>
        </div>

        {/* Shipment Detail Section */}
        <div className="border rounded-lg shadow-sm overflow-hidden mb-10">
          <div className="flex justify-between items-center bg-blue-100 px-6 py-3">
            <span className="text-gray-800 font-semibold">Ngày lấy hàng: <span className="font-normal">18 Feb 2024</span></span>
            <span className="text-green-600 font-semibold">Trạng thái: Shipment Picked Up</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6 bg-white">
            {/* Consignment Details */}
            <div>
              <h4 className="text-green-700 font-semibold text-md mb-3">Kiện hàng</h4>
              <p><strong>Mã kiện:</strong> H16</p>
              <p><strong>cân nặng:</strong> 4.00 kg</p>
              <p><strong>Giá cước:</strong> ₹12,000.00</p>
              <p><strong>Hình ảnh:</strong> 
                <a 
                  href="https://example.com/path/to/image.jpg" 
                  download 
                  className="text-blue-600 underline ml-2"
                >
                  Tải ảnh
                </a>
              </p>
            </div>

            {/* Shipper Details */}
            <div>
              <h4 className="text-green-700 font-semibold text-md mb-3">Dịch vụ</h4>
              <p><strong>Name:</strong> DHL</p>
              <p><strong>Mã bill:</strong>1000838473</p>
              <p><strong>Country:</strong> Đức</p>
            </div>

            {/* Consignee Details */}
            <div>
              <h4 className="text-green-700 font-semibold text-md mb-3">Người nhận</h4>
              <p><strong>Tên:</strong> Luca Ferrari</p>
              <p><strong>Tỉnh:</strong> Receivingburg</p>
              <p><strong>Quốc gia:</strong> Italy</p>
            </div>
          </div>
        </div>
        {/* Status Table */}
          <h3 className="text-green-700 text-xl font-semibold mb-4 text-center">Trạng thái</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 font-medium">Date</th>
                <th className="p-3 font-medium">Time</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {statuses.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.time}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDeleteStatus(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {statuses.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    Không có trạng thái nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        
      </div>
    // </div>
  );
};

export default ShipmentDetail;
