import { Search, User, Play, Menu } from "lucide-react"; // Using Lucide icons, can be replaced with Heroicons or others
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../lib/store/appSlice";

export default function Header() {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <header className="w-full px-4 py-3 bg-[#0f0f0f] flex items-center justify-between shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 text-white text-xl font-semibold">
        <span className="cursor-pointer" onClick={()=> toggleMenuHandler()} ><Menu /></span>
        <span className="text-red-500 "><Play /></span>
        <span className="text-red-500 font-bold" >YouTube</span>
      </div>

      {/* Center: Search bar (hidden on mobile) */}
      <div className="hidden md:flex flex-1 mx-6 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-l-full bg-[#121212] text-sm text-white border border-[#303030] focus:outline-none focus:ring-1 focus:ring-red-600 z-10"
        />
        <button className="px-4 bg-[#222] border border-l-0 border-[#303030] rounded-r-full text-white hover:bg-[#333]">
          <Search size={20} />
        </button>
      </div>

      {/* Right: User icon */}
      <div className="text-white">
        <User size={28} className="cursor-pointer" />
      </div>
    </header>
  );
}
