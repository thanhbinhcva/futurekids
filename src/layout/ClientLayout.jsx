import Header from "../sections/Header";
import Footer from "../sections/Footer";

const ClientLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header nằm trên */}
      <Header />

      {/* Nội dung trang tracking */}
      <main className="flex-1 p-0 bg-transparent overflow-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default ClientLayout;
