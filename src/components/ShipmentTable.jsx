import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaRedo,
  FaPlus,
  FaPlane,
  FaTruckMoving,
  FaShippingFast,
  FaEdit,
  FaEye,
  FaTrash,
} from "react-icons/fa";

function ShipmentsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("SHIPMENT READY FOR DISPATCH");
  const [currentPage, setCurrentPage] = useState(1);
  const shipmentsPerPage = 5; // ✅ Sửa lại để hiển thị 5 đơn hàng mỗi trang
  const navigate = useNavigate();

  const shipments = [
    {
      id: 700001,
      name: "LUCA FERRARI",
      country: "ITALY",
      weight: "4.00 kg (1 PC)",
      vendor1: "MRT",
      vendor2: "UPS",
      cost: "12000.00 inr - 8500.00 inr",
      ref1: "44564654",
      ref2: "07GGD56789012",
      date: "18 Feb 2024",
      currency: "VND",
    },
    {
      id: 700002,
      name: "JOHN SMITH",
      country: "USA",
      weight: "2.50 kg (1 PC)",
      vendor1: "FedEx",
      vendor2: "DHL",
      cost: "10000.00 inr - 7500.00 inr",
      ref1: "33445566",
      ref2: "FD87656789012",
      date: "20 Feb 2024",
      currency: "USD",
    },
    {
      id: 700003,
      name: "LUCA FERRARI",
      country: "ITALY",
      weight: "4.00 kg (1 PC)",
      vendor1: "MRT",
      vendor2: "UPS",
      cost: "12000.00 inr - 8500.00 inr",
      ref1: "44564654",
      ref2: "07GGD56789012",
      date: "18 Feb 2024",
      currency: "VND",
    },
    {
      id: 700004,
      name: "MARIA GOMEZ",
      country: "SPAIN",
      weight: "3.00 kg (1 PC)",
      vendor1: "BlueDart",
      vendor2: "DPD",
      cost: "11000.00 inr - 8000.00 inr",
      ref1: "55443322",
      ref2: "SP1234567890",
      date: "19 Feb 2024",
      currency: "EUR",
    },
    {
      id: 700005,
      name: "TOM HANKS",
      country: "UK",
      weight: "3.50 kg (2 PC)",
      vendor1: "MRT",
      vendor2: "TNT",
      cost: "10500.00 inr - 7000.00 inr",
      ref1: "11223344",
      ref2: "UK4567891230",
      date: "21 Feb 2024",
      currency: "VND",
    },
    {
      id: 700006,
      name: "ALAN WALKER",
      country: "NORWAY",
      weight: "5.00 kg (1 PC)",
      vendor1: "UPS",
      vendor2: "FedEx",
      cost: "13000.00 inr - 9500.00 inr",
      ref1: "99887766",
      ref2: "NW9876543210",
      date: "22 Feb 2024",
      currency: "VND",
    },
  ];

  const indexOfLast = currentPage * shipmentsPerPage;
  const indexOfFirst = indexOfLast - shipmentsPerPage;
  const currentShipments = shipments.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(shipments.length / shipmentsPerPage);

  return (
    <div className="flex-1 bg-gray-50 px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vận chuyển</h2>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 transition"
            onClick={() => navigate("/shipment/add")}
          >
            <FaPlus />
            Tạo đơn hàng
          </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 bg-gray-100 p-4 rounded shadow mb-6">
        <input
          className="border p-2 rounded col-span-2"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border p-2 rounded">
          <option>Chọn khách hàng</option>
        </select>
        <select className="border p-2 rounded">
          <option>Chọn hãng bay</option>
        </select>
        <select className="border p-2 rounded">
          <option>Reset</option>
        </select>
        <select className="border p-2 rounded">
          <option>20</option>
          <option>50</option>
        </select>
        <input type="date" className="border p-2 rounded col-span-1" />
        <input type="date" className="border p-2 rounded col-span-1" />
        <div className="col-span-1 flex justify-end items-center">
          <button className="text-white bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded flex items-center gap-2 transition">
            <FaRedo />
            Làm mới 
          </button>
        </div>
      </div>

      {/* Shipment List */}
      {currentShipments.map((item, index) => (
        <div key={index} className="bg-white rounded overflow-hidden shadow border mb-4">
          <div className="grid grid-cols-12 bg-gray-200 font-semibold text-sm py-2 px-4">
            <div className="col-span-4">PICKUP DATE: {item.date}</div>
            <div className="col-span-4 text-center text-green-600">{item.currency}</div>
            <div className="col-span-4 text-right">
              <select
                className="text-sm border rounded px-2 py-1"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="SHIPMENT READY FOR DISPATCH">Đã giao</option>
                <option value="IN TRANSIT">Đã thanh toán</option>
                <option value="DELIVERED">Chưa thông qua hải quan</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 p-4 gap-2 bg-white">
            <div className="col-span-3">
              <p className="font-semibold">{item.id}</p>
              <p>{item.name}</p>
              <p>{item.country}</p>
            </div>
            <div className="col-span-3">
              <p>{item.weight}</p>
              <p className="text-blue-600 cursor-pointer">{item.vendor1}</p>
              <p className="text-blue-600 cursor-pointer">{item.vendor2}</p>
            </div>
            <div className="col-span-3">
              <p>{item.cost}</p>
              <p className="text-blue-600 cursor-pointer">{item.ref1}</p>
              <p className="text-blue-600 cursor-pointer">{item.ref2}</p>
            </div>
            <div className="col-span-3 flex items-center justify-end gap-2">
              <Link to={`/shipments/${item.id}`} className="text-purple-600 hover:scale-110 transition" title="View File">
                <FaEye size={20} />
              </Link>
              <button className="text-blue-600 hover:scale-110 transition" title="Edit Shipment" onClick={() => navigate(`/shipment/edit/${item.id}`)}>
                <FaEdit size={20} />
              </button>
              <button className="text-green-600 hover:scale-110 transition" title="Print Invoice">
                <FaPlane size={20} />
              </button>
              <button className="text-yellow-500 hover:scale-110 transition" title="Mark as Dispatch">
                <FaTruckMoving size={20} />
              </button>
              <button className="text-cyan-600 hover:scale-110 transition" title="Send SMS">
                <FaShippingFast size={20} />
              </button>
              <button className="text-red-600 hover:scale-110 transition" title="Delete">
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="font-medium text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ShipmentsPage;
