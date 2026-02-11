import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full sm:w-[400px] w-64 bg-white shadow-xl z-[9999]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 gap-4">
          <Link
            to="/"
            onClick={onClose}
            className="text-lg hover:text-blue-600 transition"
          >
            Home
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-[9998]"
        />
      )}
    </>
  );
};

export default Sidebar;
