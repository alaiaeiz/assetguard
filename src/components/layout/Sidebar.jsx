import { Shield, LayoutDashboard, Laptop, User, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Assets",
    icon: Laptop,
    path: "/assets",
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b">
        <Shield className="text-blue-600 mr-3" size={30} />

        <div>
          <h1 className="font-bold text-xl">
            AssetGuard
          </h1>

          <p className="text-sm text-slate-500">
            IT Asset Management
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={20} />

              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;