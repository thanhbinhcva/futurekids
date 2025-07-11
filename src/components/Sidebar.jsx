import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaRupeeSign, FaFileInvoice, FaUsers } from "react-icons/fa";
import { MdOutlineBusinessCenter, MdOutlinePayment } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="w-[240px] bg-[#121928] text-white min-h-screen px-4 py-6">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav className="flex flex-col gap-4">
        <SidebarLink to="/admin" icon={<FaTachometerAlt />} label="Dashboard" />
        <SidebarLink to="/shipment" icon={<FaBox />} label="Shipments" />
        <SidebarLink to="/payment" icon={<FaRupeeSign />} label="Payment" />
        <SidebarLink to="/sales-ledger" icon={<FaFileInvoice />} label="Sales Ledger" />
        <SidebarLink to="/clients" icon={<FaUsers />} label="Clients" />
        <SidebarLink to="/companies" icon={<MdOutlineBusinessCenter />} label="Companies" />
        <SidebarLink to="/payment-modes" icon={<MdOutlinePayment />} label="Payment Modes" />
      </nav>
    </aside>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-3 text-white hover:bg-blue-600 px-3 py-2 rounded"
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </Link>
);

export default Sidebar;
