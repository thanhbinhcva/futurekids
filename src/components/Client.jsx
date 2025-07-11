import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ClientsPage = () => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    address: "",
    streetAddress: "",
    city: "",
    // pincode: "",
    // stateCode: "",
    // gstNo: "",
    openingBalance: "",
    billing: "Yes",
  });

  const [clients, setClients] = useState([
    {
      code: "KRW",
      name: "K R Kumar",
      billing: "Yes",
    //   stateCode: "07",
    //   gstNo: "07ALMAN996K1ZS",
    //   openingBalance: "6800.00",
      address: "Address",
      streetAddress: "street",
      city: "city",
    //   pincode: "123456",
    },
    {
      code: "GEN",
      name: "General",
      billing: "No",
    //   stateCode: "State",
    //   gstNo: "",
    //   openingBalance: "",
      address: "123,Home",
      streetAddress: "Street Address",
      city: "City",
    //   pincode: "12345",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClients(prev => [...prev, formData]);
    setFormData({
      code: "",
      name: "",
      address: "",
      streetAddress: "",
      city: "",
    //   pincode: "",
    //   stateCode: "",
    //   gstNo: "",
    //   openingBalance: "",
      billing: "Yes",
    });
  };

  const handleDelete = (index) => {
    setClients(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Khách hàng</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 mb-8">
        <div className="grid grid-cols-4 gap-4">
          <input name="code" placeholder="Mã khách hàng *" value={formData.code} onChange={handleChange} className="p-2 border rounded" required />
          <input name="name" placeholder="Tên *" value={formData.name} onChange={handleChange} className="p-2 border rounded" required />
          <input name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} className="p-2 border rounded" />
          <input name="streetAddress" placeholder="Street Address" value={formData.streetAddress} onChange={handleChange} className="p-2 border rounded" />
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="p-2 border rounded" />
          {/* <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="p-2 border rounded" />
          <input name="stateCode" placeholder="State Code" value={formData.stateCode} onChange={handleChange} className="p-2 border rounded" />
          <input name="gstNo" placeholder="GST No" value={formData.gstNo} onChange={handleChange} className="p-2 border rounded" />
          <input name="openingBalance" placeholder="Opening Balance" value={formData.openingBalance} onChange={handleChange} className="p-2 border rounded" />
          <select name="billing" value={formData.billing} onChange={handleChange} className="p-2 border rounded">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select> */}
          <div className="col-span-4 flex justify-end">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Thêm khách hàng
            </button>
          </div>
        </div>
      </form>

      {/* Client Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-200 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-2 text-left">Mã khách hàng</th>
              <th className="px-4 py-2 text-left">Tên khách hàng</th>
              {/* <th className="px-4 py-2 text-left">Billing</th>
              <th className="px-4 py-2 text-left">State Code</th>
              <th className="px-4 py-2 text-left">GST No</th>
              <th className="px-4 py-2 text-left">Opening Balance</th> */}
              <th className="px-4 py-2 text-left">địa chỉ</th>
              <th className="px-4 py-2 text-left">Street Address</th>
              <th className="px-4 py-2 text-left">City</th>
              {/* <th className="px-4 py-2 text-left">Pincode</th> */}
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{client.code}</td>
                <td className="px-4 py-2">{client.name}</td>
                {/* <td className="px-4 py-2">{client.billing}</td>
                <td className="px-4 py-2">{client.stateCode}</td>
                <td className="px-4 py-2">{client.gstNo}</td>
                <td className="px-4 py-2">{client.openingBalance}</td> */}
                <td className="px-4 py-2">{client.address}</td>
                <td className="px-4 py-2">{client.streetAddress}</td>
                <td className="px-4 py-2">{client.city}</td>
                {/* <td className="px-4 py-2">{client.pincode}</td> */}
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsPage;
