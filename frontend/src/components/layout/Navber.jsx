import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import BottomNav from "../ui/ButtomNav";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const handleLogout = () => {
    setAuthUser(null); // Clear auth state
  };

  return (
    <header className="w-full bg-[#8A3FFC] fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            Zarrin
          </Link>
        </div>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full left-0 right-0 bg-[#8A3FFC] md:bg-transparent flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 pb-4 md:pb-0`}
        >
          <Link to="/blog" className="text-white hover:text-purple-200">
            Blog
          </Link>
          <Link to="/about" className="text-white hover:text-purple-200">
            About
          </Link>

          {!authUser ? (
            <>
              <Link to="/signup" className="text-white hover:text-purple-200">
                Signup
              </Link>
              <Link to="/login" className="text-white hover:text-purple-200">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link to="/post" className="text-white hover:text-purple-200">
                Post Blog
              </Link>
              <button
                onClick={handleLogout}
                className="text-white hover:text-purple-200"
              >
                Logout
              </button>
            </>
          )}

          <Link to="/contact">
            <button className="bg-white text-[#8A3FFC] px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
              Contact Us
            </button>
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <BottomNav />
    </header>
  );
}

export default Navbar;
