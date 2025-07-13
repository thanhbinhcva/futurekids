import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import backgroundImage from "../assets/Warehouse.jpg";

const mockShipments = [
  {
    shipmentNo: "TUTTY8976544",
    origin: "Algeria",
    destination: "Nigeria",
    lastUpdated: "Wed 01 December, 2021; 11:00 PM",
    status: "Đã lấy đơn",
  },
  {
    shipmentNo: "VN123456789",
    origin: "Hà Nội",
    destination: "TP. Hồ Chí Minh",
    lastUpdated: "Mon 08 July, 2025; 03:15 PM",
    status: "Đang vận chuyển",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Đã lấy đơn":
      return "bg-green-100 text-green-700";
    case "Đang vận chuyển":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function TrackingList() {
  return (
    <div
      className="w-full lg:h-[700px] h-fit pt-[60px] lg:pt-0 px-5 lg:px-[100px] flex items-center justify-center bg-center bg-no-repeat bg-cover relative transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay che nền để tăng độ tương phản */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl bg-white rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 flex items-center justify-center gap-2">
          📦 Đơn hàng của bạn
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-blue-50 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4 text-left">Mã Đơn</th>
                <th className="px-6 py-4 text-left">Lộ Trình</th>
                <th className="px-6 py-4 text-left">Thời Gian</th>
                <th className="px-6 py-4 text-left">Trạng Thái</th>
                <th className="px-6 py-4 text-left">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {mockShipments.map((shipment, index) => (
                <tr
                  key={shipment.shipmentNo}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-6 py-4 font-medium text-blue-700 underline">
                    <Link to={`/tracking/${shipment.shipmentNo}`}>
                      {shipment.shipmentNo}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    {shipment.origin} → {shipment.destination}
                  </td>
                  <td className="px-6 py-4">{shipment.lastUpdated}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                        shipment.status
                      )}`}
                    >
                      {shipment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/tracking/${shipment.shipmentNo}`}
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white text-xs px-4 py-2 rounded shadow transition"
                    >
                      Xem chi tiết <FaArrowRight className="ml-2 text-xs" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}