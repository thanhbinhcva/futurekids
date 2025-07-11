import { useParams } from "react-router-dom";
import StatusTimeline from "../components/StatusTimeline";

const mockShipments = [
  {
    shipmentNo: "700001",
    client: "LUCA FERRARI",
    origin: "Hà Nội",
    destination: "TP. Hồ Chí Minh",
    imageUrl: "https://via.placeholder.com/300x200?text=Package+Image+1",
    price: "350,000 VND",
    contact: "0389 123 456",
    bill: "1000838293",
    statuses: [
      { time: "2025-06-25 10:00", status: "Đã tạo đơn hàng" },
      { time: "2025-06-26 08:30", status: "Đã lấy hàng" },
      { time: "2025-06-27 14:45", status: "Đang vận chuyển" },
      { time: "2025-06-28 17:00", status: "Đã giao hàng" },
    ],
  },
  {
    shipmentNo: "700002",
    client: "NGUYEN VAN A",
    origin: "Đà Nẵng",
    destination: "Hải Phòng",
    imageUrl: "https://via.placeholder.com/300x200?text=Package+Image+2",
    price: "420,000 VND",
    contact: "0912 345 678",
    bill: "1000838293",
    statuses: [
      { time: "2025-06-20 09:00", status: "Đã tạo đơn hàng" },
      { time: "2025-06-21 11:20", status: "Đã lấy hàng" },
    ],
  },
];


export default function TrackingPage() {
  const { code } = useParams();
  const shipment = mockShipments.find((s) => s.shipmentNo === code);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Lịch sử đơn hàng
      </h1>

      {!shipment ? (
        <p className="text-red-500 text-center">Không tìm thấy đơn hàng với mã: {code}</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
            Mã kiện hàng: {shipment.shipmentNo}
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={shipment.imageUrl}
              alt="Ảnh kiện hàng"
              className="w-full md:w-1/2 rounded border"
            />

            <div className="flex-1">
              <p className="mb-2"><strong>Người gửi:</strong> {shipment.client}</p>
              <p className="mb-2"><strong>Mã Bill:</strong> {shipment.bill}</p>
              <p className="mb-2"><strong>Xuất phát:</strong> {shipment.origin}</p>
              <p className="mb-2"><strong>Đích đến:</strong> {shipment.destination}</p>
              <p className="mb-2"><strong>Giá cước:</strong> {shipment.price}</p>
              <p className="mb-2"><strong>Liên hệ:</strong> {shipment.contact}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Lịch sử trạng thái</h3>
            <StatusTimeline statuses={shipment.statuses} />
          </div>
        </div>
      )}
    </div>
  );
}
