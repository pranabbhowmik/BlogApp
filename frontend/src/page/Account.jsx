import {
  Bell,
  ChevronRight,
  KeyRound,
  LogOut,
  Store,
  UserCircle,
  HelpCircle,
  Newspaper,
  HeartHandshake,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuthContext } from "../context/AuthContext";

function Account() {
  const [user, setUser] = useState({ fullname: "", email: "" });
  const navigate = useNavigate(); // Initialize navigate
  const { authUser, setAuthUser } = useAuthContext();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.user);
    }
    window.scrollTo(0, document.body.scrollHeight);

    // Smoothly scroll to the top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, []);

  const handleLogout = () => {
    setAuthUser(null);
    // Clear auth state // Remove user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-16 lg:p-8">
      <div className="mx-auto max-w-md w-full bg-white rounded-xl shadow-sm">
        {/* Profile Section */}
        <div className="flex flex-col items-center p-6 border-b">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-[#8A3FFC] flex items-center justify-center">
              <span className="text-xl font-semibold text-white">
                {user.fullname ? user.fullname.charAt(0).toUpperCase() : "U"}
              </span>
            </div>
          </div>
          <h2 className="mt-4 text-xl font-semibold">
            {user.fullname || "User"}
          </h2>
          <p className="text-gray-500 text-sm">
            {user.email || "user@example.com"}
          </p>
          <button
            className="mt-4 px-6 py-2 bg-black text-white rounded-full text-sm font-medium 
                     hover:bg-gray-800 transition-colors duration-200 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Edit profile
          </button>
        </div>

        {/* Inventories Section */}
        <div className="p-4">
          <h3 className="text-sm text-gray-500 mb-2 px-3">Inventories</h3>
          <div className="space-y-2">
            <button
              className="w-full flex items-center justify-between p-3 
                       hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <Newspaper className="w-5 h-5 text-gray-700" />
                <span>My Blogs</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button
              className="w-full flex items-center justify-between p-3 
                       hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-700" />
                <span>Support</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="p-4">
          <h3 className="text-sm text-gray-500 mb-2 px-3">Preferences</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-700" />
                <span>Push notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div
                  className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                            peer-checked:after:translate-x-full peer-checked:after:border-white 
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:bg-white after:border-gray-300 after:border after:rounded-full 
                            after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"
                ></div>
              </label>
            </div>

            <button
              className="w-full flex items-center justify-between p-3 
                       hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-gray-700" />
                <span>Help</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-3 text-red-500 
                     hover:bg-red-50 rounded-lg transition-colors duration-200 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
