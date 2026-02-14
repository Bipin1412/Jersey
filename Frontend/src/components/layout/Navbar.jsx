// import logo from "../../assets/img/animated-nav-logo.mp4";
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Menu,
//   Search,
//   X,
//   User,
//   ShoppingCart,
// } from "lucide-react";
// import Sidebar from "./Sidebar";

// const Navbar = () => {
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`fixed md:sticky top-0 left-0 w-full h-16 md:h-20 z-[1000] transition-all duration-300 bg-amber-100 shadow-lg ${
//           isHome && !isScrolled ? "md:bg-transparent md:shadow-none" : ""
//         }`}
//       >
//         <div className="h-full px-3 sm:px-4 md:px-6 flex items-center justify-between">
//           <button
//             className="p-2 text-blue-950"
//             aria-label="Open menu"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <Menu size={24} />
//           </button>

//           <div className="absolute left-1/2 -translate-x-1/2">
//             <Link to="/">
//               <video
//                 src={logo}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="h-11 sm:h-12 md:h-20 w-auto object-contain mix-blend-screen"
//                 aria-label="Logo"
//               />

//             </Link>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
//             <button
//               onClick={() => setSearchOpen(true)}
//               className="p-2 text-blue-950"
//               aria-label="Open search"
//             >
//               <Search size={20} />
//             </button>

//             <button
//               className="hidden sm:block p-2 text-blue-950"
//               aria-label="Account"
//             >
//               <User size={20} />
//             </button>

//             <button className="p-2 text-blue-950" aria-label="Cart">
//               <ShoppingCart size={20} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[9999] transform transition-transform duration-300 ${
//           searchOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between px-4 h-16 border-b">
//           <h2 className="text-lg font-semibold">Search</h2>
//           <button onClick={() => setSearchOpen(false)} aria-label="Close search">
//             <X size={24} />
//           </button>
//         </div>

//         <div className="p-4">
//           <input
//             type="text"
//             placeholder="Search for..."
//             className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-black"
//           />
//         </div>
//       </div>

//       {searchOpen && (
//         <div
//           onClick={() => setSearchOpen(false)}
//           className="fixed inset-0 bg-black/40 z-[9998]"
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;




// import logo from "../assets/img/logo.png";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Menu,
//   Search,
//   X,
//   User,
//   ShoppingCart,
// } from "lucide-react";

// const Navbar = () => {
//   const [searchOpen, setSearchOpen] = useState(false);

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="fixed top-0 left-0 w-full h-16 bg-amber-100 border-b z-50">
//         <div className="h-full px-4 flex items-center justify-between">

//           {/* LEFT - Hamburger */}
//           <button className="p-2">
//             <Menu size={24} />
//           </button>

//           {/* CENTER - Logo */}
//            <div className="absolute left-1/2 -translate-x-1/2">
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="h-20 md:h-25 object-contain cursor-pointer"
//               />
//             </Link>
//           </div>

//           {/* RIGHT - Icons */}
//           <div className="flex items-center gap-4">
//             <button onClick={() => setSearchOpen(true)}>
//               <Search size={22} />
//             </button>

//             <button>
//               <User size={22} />
//             </button>

//             <button>
//               <ShoppingCart size={22} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* SEARCH SLIDER */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-100 bg-white z-9999
//         transform transition-transform duration-300
//         ${searchOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 h-16 border-b">
//           <h2 className="text-lg font-semibold">Search</h2>
//           <button onClick={() => setSearchOpen(false)}>
//             <X size={24} />
//           </button>
//         </div>

//         {/* Input */}
//         <div className="p-4">
//           <input
//             type="text"
//             placeholder="Search for..."
//             className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-black"
//           />
//         </div>
//       </div>

//       {/* BACKDROP */}
//       {searchOpen && (
//         <div
//           onClick={() => setSearchOpen(false)}
//           className="fixed inset-0 bg-black/40 z-9998"
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;




import logo from "../../assets/img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  X,
  User,
  ShoppingCart,
} from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="site-navbar fixed top-0 inset-x-0 h-[72px] bg-amber-100 border-b z-[1000]">
        <div className="site-navbar-inner h-full px-4 flex items-center justify-between">

          {/* LEFT - Hamburger */}
          <button className="p-2" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>

          {/* CENTER - Logo */}
          <div className="site-navbar-logo-wrap absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="site-navbar-logo h-[72px] object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* RIGHT - Icons */}
          <div className="site-navbar-actions flex items-center gap-4">
            <button onClick={() => setSearchOpen(true)}
              className="cursor-pointer"
              >
              <Search size={22} />
            </button>

            <button className="site-account-btn cursor-pointer">
              <User size={22} />
            </button>

            <button className="cursor-pointer">
              <ShoppingCart size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* SEARCH SLIDER (your existing one) */}
      <div
        className={`site-search-panel fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[9999]
        transform transition-transform duration-300
        ${searchOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <h2 className="text-lg font-semibold">Search</h2>
          <button onClick={() => setSearchOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <input
            type="text"
            placeholder="Search for..."
            className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {searchOpen && (
        <div
          onClick={() => setSearchOpen(false)}
          className="fixed inset-0 bg-black/40 z-[9998]"
        />
      )}
    </>
  );
};

export default Navbar;

