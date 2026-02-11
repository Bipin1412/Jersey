import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
