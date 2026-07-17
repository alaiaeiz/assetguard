import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <Input
          placeholder="Search assets..."
          className="pl-10"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <button className="relative rounded-full p-2 hover:bg-slate-100 transition">
          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-medium">
              Amey
            </p>

            <p className="text-sm text-slate-500">
              IT Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;