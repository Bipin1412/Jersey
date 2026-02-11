import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-semibold">Menu</h2>
        <X onClick={onClose} className="cursor-pointer" />
      </div>

      <div className="flex flex-col p-4 gap-4">
        <Link to="/" onClick={onClose}>
          Home
        </Link>
        <Link to="/about" onClick={onClose}>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
