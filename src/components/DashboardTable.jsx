import React, { useState } from "react";
import OrderStatusModal from "./OrderStatusModal"; // 👉 Nhớ đường dẫn đúng
import { FaEdit } from "react-icons/fa";
const allShipments = [
  {
    id: 1,
    date: "18 Feb 2024",
    shipmentNo: "700003",
    client: "KL01",
    consignee: "Luca Ferrari",
    destination: "Italy",
    weight: 4.0,
    pincode: "123456",
    connectLink: "KH01",
    fwdLink: "07GGD56789012",
    status: "Shipment Picked Up",
  },
  {
    id: 2,
    date: "17 Feb 2024",
    shipmentNo: "700004",
    client: "KH01",
    consignee: "Henrik Andersen",
    destination: "Australia",
    weight: 8.0,
    pincode: "1234558",
    connectLink: "KH02",
    fwdLink: "DSWDHB151494",
    status: "Shipment Picked Up",
  },
  {
    id: 2,
    date: "17 Feb 2024",
    shipmentNo: "700004",
    client: "KH01",
    consignee: "Henrik Andersen",
    destination: "Australia",
    weight: 8.0,
    pincode: "1234558",
    connectLink: "KH02",
    fwdLink: "DSWDHB151494",
    status: "Shipment Picked Up",
  },
  {
    id: 2,
    date: "17 Feb 2024",
    shipmentNo: "700004",
    client: "KH01",
    consignee: "Henrik Andersen",
    destination: "Australia",
    weight: 8.0,
    pincode: "1234558",
    connectLink: "KH02",
    fwdLink: "DSWDHB151494",
    status: "Shipment Picked Up",
  },
  {
    id: 2,
    date: "17 Feb 2024",
    shipmentNo: "700004",
    client: "KH01",
    consignee: "Henrik Andersen",
    destination: "Australia",
    weight: 8.0,
    pincode: "1234558",
    connectLink: "KH02",
    fwdLink: "DSWDHB151494",
    status: "Shipment Picked Up",
  },
  {
    id: 2,
    date: "17 Feb 2024",
    shipmentNo: "700004",
    client: "KH01",
    consignee: "Henrik Andersen",
    destination: "Australia",
    weight: 8.0,
    pincode: "1234558",
    connectLink: "KH02",
    fwdLink: "DSWDHB151494",
    status: "Shipment Picked Up",
  },
  {
    id: 2,
    date: "17 Feb 2024",
    shipmentNo: "700004",
    client: "KH01",
    consignee: "Henrik Andersen",
    destination: "Australia",
    weight: 8.0,
    pincode: "1234558",
    connectLink: "KH02",
    fwdLink: "DSWDHB151494",
    status: "Shipment Picked Up",
  },
  {
    id: 2,
    date: "17 Feb 2024",
    shipmentNo: "700004",
    client: "KH01",
    consignee: "Henrik Andersen",
    destination: "Australia",
    weight: 8.0,
    pincode: "1234558",
    connectLink: "KH02",
    fwdLink: "DSWDHB151494",
    status: "Shipment Picked Up",
  },
  // 👉 Thêm nhiều shipment nếu cần
];

const ITEMS_PER_PAGE = 5;

const DashboardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shipments, setShipments] = useState(allShipments);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const totalPages = Math.ceil(shipments.length / ITEMS_PER_PAGE);

  const currentData = shipments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleUpdateOrder = (updatedOrder) => {
    const updatedShipments = shipments.map((s) =>
      s.id === updatedOrder.id ? updatedOrder : s
    );
    setShipments(updatedShipments);
  };

  return (
    <div className="flex-1 bg-gray-50 px-6 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>

      <div className="bg-white rounded shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-4 py-2 w-64"
          />
          <select className="border border-gray-300 rounded px-3 py-2">
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-3 py-2 text-left">PickUp</th>
                <th className="px-3 py-2">Shipment No</th>
                <th className="px-3 py-2">Mã khách hàng</th>
                <th className="px-3 py-2">Tên</th>
                <th className="px-3 py-2">Điểm đến</th>
                <th className="px-3 py-2">Cân nặng</th>
                <th className="px-3 py-2">Mã Bill</th>
                <th className="px-3 py-2">Mã kiện</th>
                {/* <th className="px-3 py-2">FWD. Link</th> */}
                <th className="px-3 py-2">Trạng thái</th>
                <th className="px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, idx) => (
                <tr key={item.id} className="border-b">
                  <td className="px-3 py-2">{item.date}</td>
                  <td className="px-3 py-2">{item.shipmentNo}</td>
                  <td className="px-3 py-2">{item.client}</td>
                  <td className="px-3 py-2">{item.consignee}</td>
                  <td className="px-3 py-2">{item.destination}</td>
                  <td className="px-3 py-2">{item.weight}</td>
                  <td className="px-3 py-2">{item.pincode}</td>
                  <td className="px-3 py-2">{item.connectLink}</td>
                  {/* <td className="px-3 py-2">{item.fwdLink}</td> */}
                  <td className="px-3 py-2">{item.status}</td>
                  <td className="px-3 py-2">
                    <FaEdit
                      onClick={() => handleOpenModal(item)}
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal hiển thị */}
          {selectedOrder && (
            <OrderStatusModal
              order={selectedOrder}
              onClose={handleCloseModal}
              onUpdate={handleUpdateOrder}
            />
          )}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Trước
          </button>
          <span className="text-sm text-gray-600">
            Trang {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
