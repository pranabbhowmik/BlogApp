import React from "react";
import { NavLink } from "react-router-dom";
import {
  Newspaper,
  CircleUserRound,
  House,
  CirclePlus,
  Mail,
} from "lucide-react";
function BottomNav() {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-3 left-1/2 shadow-lg md:hidden">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {[
          { icon: House, path: "/", label: "Home" },
          { icon: Newspaper, path: "/blog", label: "Blogs" },
          { icon: CirclePlus, path: "/post", label: "Add" },
          { icon: Mail, path: "/contact", label: "Contact" },
          { icon: CircleUserRound, path: "/account", label: "Account" },
        ].map(({ icon: Icon, path, label }) => (
          <NavLink
            key={label}
            to={path}
            className="relative inline-flex flex-col items-center justify-center px-5 group"
          >
            <div
              className="relative  inline-flex items-center justify-center w-10 h-10 text-gray-500 rounded-full
                transition-all duration-300 ease-in-out
                group-hover:bg-gray-100 group-hover:text-black group-hover:scale-110 group-active:scale-90"
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-500 font-robotoMono transition-colors duration-300 group-hover:text-black">
              {label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BottomNav;
