import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ShipmentForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    shipmentNo: "",
    client: "",
    shipperName: "",
    shipperEmail: "",
    shipperMobile: "",
    shipperAddress: "",
    shipperStreet: "",
    shipperCity: "",
    shipperPincode: "",
    shipperCountry: "",
    shipperAadhar: "",
    shipperGst: "",
    image: null, 

    consigneeName: "",
    consigneeAddress: "",
    consigneeStreet: "",
    consigneeCity: "",
    consigneePincode: "",
    consigneeCountry: "",
    consigneeMobile: "",

    packageCode: "",
    billCode: "",
    status: "",
    weight: "",
    price: "",
    length: "",
    width: "",
    height: "",
  });

  useEffect(() => {
    if (isEdit) {
      // ✅ Mô phỏng fetch data shipment từ backend khi chỉnh sửa
      const existingData = {
        shipmentNo: id,
        client: "K R Kumar",
        shipperName: "DHL",
        shipperEmail: "",
        shipperMobile: "0123456789",
        // shipperAddress: "Address",
        // shipperStreet: "street",
        // shipperCity: "Amritsar",
        // shipperPincode: "123456",
        shipperCountry: "India",
        shipperAadhar: "1008371932",
        shipperGst: "",

        consigneeName: "Luca Ferrari",
        consigneeAddress: "876 Recipient Lane, Unit 34",
        consigneeStreet: "876 Recipient Lane, Unit 34",
        consigneeCity: "Receivingburg",
        consigneePincode: "",
        consigneeCountry: "",
        consigneeMobile: "",

        packageCode: "",
        billCode: "",
        status: "",
        weight: "",
        price: "",
        length: "",
        width: "",
        height: "",
      };

      setFormData(existingData);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      console.log("Update shipment:", formData);
    } else {
      console.log("Create new shipment:", formData);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: imageUrl, // Nếu bạn muốn giữ file thật: image: file
      }));
    }
  };

  return (
    <div className="flex-1 px-6 py-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-6">{isEdit ? "Chỉnh sửa" : "Thêm mới"}</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Shipment No & Client */}
        <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded shadow">
          <div>
            <label className="block font-medium">Shipment No</label>
            <input
              name="shipmentNo"
              value={formData.shipmentNo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              disabled={isEdit}
            />
          </div>
          <div>
            <label className="block font-medium">Khách hàng</label>
            <select
              name="client"
              value={formData.client}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Client</option>
              <option value="K R Kumar">K R Kumar</option>
              <option value="Another Client">Another Client</option>
            </select>
          </div>
        </div>

        {/* Shipper */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Dịch vụ vận chuyển</h3>
          <div className="grid grid-cols-3 gap-4">
            <input name="shipperName" placeholder="Name" value={formData.shipperName} onChange={handleChange} className="p-2 border rounded" />
            {/* <input name="shipperAddress" placeholder="Address" value={formData.shipperAddress} onChange={handleChange} className="p-2 border rounded" />
            <input name="shipperStreet" placeholder="Street Address" value={formData.shipperStreet} onChange={handleChange} className="p-2 border rounded" />
            <input name="shipperCity" placeholder="City" value={formData.shipperCity} onChange={handleChange} className="p-2 border rounded" />
            <input name="shipperPincode" placeholder="Pincode" value={formData.shipperPincode} onChange={handleChange} className="p-2 border rounded" />
            <input name="shipperCountry" placeholder="Country" value={formData.shipperCountry} onChange={handleChange} className="p-2 border rounded" /> */}
            <input name="shipperMobile" placeholder="Mobile" value={formData.shipperMobile} onChange={handleChange} className="p-2 border rounded" />
            <input name="shipperEmail" placeholder="Email" value={formData.shipperEmail} onChange={handleChange} className="p-2 border rounded" />
          </div>
        </div>

        {/* Consignee */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Người nhận</h3>
          <div className="grid grid-cols-3 gap-4">
            <input name="consigneeName" placeholder="Name" value={formData.consigneeName} onChange={handleChange} className="p-2 border rounded" />
            <input name="consigneeAddress" placeholder="Address" value={formData.consigneeAddress} onChange={handleChange} className="p-2 border rounded" />
            <input name="consigneeStreet" placeholder="Street Address" value={formData.consigneeStreet} onChange={handleChange} className="p-2 border rounded" />
            <input name="consigneeCity" placeholder="City" value={formData.consigneeCity} onChange={handleChange} className="p-2 border rounded" />
            <input name="consigneeCountry" placeholder="Country" value={formData.consigneeCountry} onChange={handleChange} className="p-2 border rounded" />
            <input name="consigneeMobile" placeholder="Mobile" value={formData.consigneeMobile} onChange={handleChange} className="p-2 border rounded" />
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Thông tin kiện hàng</h3>
          <div className="grid grid-cols-3 gap-4">
            <input
              name="packageCode"
              placeholder="Mã kiện"
              value={formData.packageCode}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              name="billCode"
              placeholder="Mã bill"
              value={formData.billCode}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              name="status"
              placeholder="Trạng thái"
              value={formData.status}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              name="weight"
              placeholder="Số cân (kg)"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              name="price"
              placeholder="Giá cước"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              name="length"
              placeholder="Chiều dài (cm)"
              type="number"
              value={formData.length}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              name="width"
              placeholder="Chiều rộng (cm)"
              type="number"
              value={formData.width}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              name="height"
              placeholder="Chiều cao (cm)"
              type="number"
              value={formData.height}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>
          <div className="col-span-3">
            <label className="block font-medium mb-1">Ảnh kiện hàng</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border rounded w-full"
            />
            {formData.image && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">Xem trước ảnh:</p>
                <img
                  src={formData.image}
                  alt="Preview"
                  className="h-40 rounded border mt-1"
                />
              </div>
            )}
          </div>

        </div>
        <div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            {isEdit ? "Update Shipment" : "Create Shipment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipmentForm;
