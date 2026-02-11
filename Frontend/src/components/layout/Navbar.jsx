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
      <nav className="fixed top-0 left-0 w-full h-18 bg-amber-100 border-b z-50 ">
        <div className="h-full px-4 flex items-center justify-between">

          {/* LEFT - Hamburger */}
          <button className="p-2" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>

          {/* CENTER - Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-18 object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* RIGHT - Icons */}
          <div className="flex items-center gap-4">
            <button onClick={() => setSearchOpen(true)}
              className="cursor-pointer"
              >
              <Search size={22} />
            </button>

            <button className="cursor-pointer">
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
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[9999]
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
