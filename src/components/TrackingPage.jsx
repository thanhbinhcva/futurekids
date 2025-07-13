import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import backgroundImage from "../assets/Warehouse.jpg"; // ✅ import background

const mockTrackingData = {
  shipmentNo: "700001",
  origin: "Việt Nam",
  destination: "Hàn Quốc",
  status: "ĐÃ LẤY HÀNG",
  updatedAt: "Wed 01 December, 2021; 11:00 PM",
};

const mockDetail = {
  hblNumber: "700002",
  originPort: "Việt Nam",
  destinationPort: "Hàn Quốc",
  transportMode: "Máy bay",
  pieces: 10,
  weight: "20KG",
  bill: "1000893284",
  deliveryRequired: "Mon 12 December, 2022; 10:00 AM",
  estimatedDelivery: "Tue 01 February, 2022; 10:00 AM",
};

const getStatusColor = (step, currentStatus) => {
  const steps = ["ĐÃ LẤY HÀNG", "ĐANG VẬN CHUYỂN", "ĐÃ GIAO"];
  const currentIndex = steps.indexOf(currentStatus);
  const stepIndex = steps.indexOf(step);
  if (stepIndex < currentIndex) return "bg-gray-400";
  if (stepIndex === currentIndex) return "bg-blue-600";
  return "bg-gray-300";
};

export default function TrackingPage() {
  const { code } = useParams();
  const data = mockTrackingData;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative p-6 flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b pb-2">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2 text-gray-800">
              <FaStar className="text-gray-500" />
              {data.shipmentNo}
            </h1>
            <p className="text-sm text-gray-500">
              {data.origin} → {data.destination}
            </p>
          </div>
          <div className="text-right">
            <p className="text-blue-600 font-bold text-md">{data.status}</p>
            <p className="text-sm text-gray-500">{data.updatedAt}</p>
            <p className="text-xs text-gray-400">Giờ Việt Nam</p>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center mb-6">
          {["ĐÃ LẤY HÀNG", "ĐANG VẬN CHUYỂN", "ĐÃ GIAO"].map((step, index) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`flex-1 h-3 rounded ${
                  index !== 0 ? "ml-2" : ""
                } ${getStatusColor(step, data.status)}`}
              />
              <span
                className={`text-xs ml-2 font-semibold ${
                  data.status === step ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="bg-blue-600 text-white p-4 rounded shadow mb-2">
          <p className="font-semibold text-lg">Kiện hàng đã được gửi</p>
        </div>
        <div className="bg-white p-4 rounded border text-gray-800 mb-6">
          <p className="text-sm font-semibold">{data.updatedAt.split(";")[1]}</p>
          <p className="text-sm text-gray-500">{data.updatedAt.split(";")[0]}</p>
        </div>

        {/* Detailed Shipment Info */}
        <div className="border rounded shadow overflow-hidden">
          <table className="min-w-full text-sm">
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-gray-50">
                <td className="font-semibold px-4 py-3">Mã kiện hàng</td>
                <td className="px-4 py-3">{mockDetail.hblNumber}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="font-semibold px-4 py-3">Mã bill</td>
                <td className="px-4 py-3">{mockDetail.bill}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-3">Gửi từ</td>
                <td className="px-4 py-3">{mockDetail.originPort}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="font-semibold px-4 py-3">Đến</td>
                <td className="px-4 py-3">{mockDetail.destinationPort}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-3">Hình thức vận chuyển</td>
                <td className="px-4 py-3">{mockDetail.transportMode}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="font-semibold px-4 py-3">Số lượng</td>
                <td className="px-4 py-3">{mockDetail.pieces}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-3">Cân nặng</td>
                <td className="px-4 py-3">{mockDetail.weight}</td>
              </tr>
              <tr>
                <td className="font-semibold px-4 py-3">Ngày Vận Chuyển</td>
                <td className="px-4 py-3">{mockDetail.deliveryRequired}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="font-semibold px-4 py-3">Ngày Giao Dự Kiến</td>
                <td className="px-4 py-3">{mockDetail.estimatedDelivery}</td>
              </tr>
            </tbody>
          </table>

          {/* Print Button */}
          <div className="flex justify-center py-4 bg-white">
            <button
              onClick={() => window.print()}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
