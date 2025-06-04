import {
  Home,
  PlayCircle,
  Video,
  Clock,
  ThumbsUp,
  History,
  Layers,
  GraduationCap,
  Dot,
} from "lucide-react";
import { useSelector } from "react-redux";

const sidebarItems = [
  { section: "", items: [
      { icon: <Home size={20} />, label: "Home" , badge: true },
      { icon: <PlayCircle size={20} />, label: "Shorts" },
      { icon: <Video size={20} />, label: "Subscriptions",  },
    ]
  },
  { section: "You", items: [
      { icon: <History size={20} />, label: "History" },
      { icon: <Layers size={20} />, label: "Playlists" },
      { icon: <Video size={20} />, label: "Your videos" },
      { icon: <GraduationCap size={20} />, label: "Your courses" },
      { icon: <Clock size={20} />, label: "Watch later" },
      { icon: <ThumbsUp size={20} />, label: "Liked videos" },
    ]
  }
];

const subscriptions = [
  { name: "Akshay Saini", live: true, img: "https://yt3.googleusercontent.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s160-c-k-c0x00ffffff-no-rj" },
  { name: "Bro Code", live: true, img: "https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s160-c-k-c0x00ffffff-no-rj" },
  { name: "Chess.com", live: true, img: "https://yt3.googleusercontent.com/ce_EvpNlsbZTXRNLOoDVy8ZhHZcYEHVHefwdg9d0x7BZAk5AGXFteEILFmrBnGF_LLvE1HEU3LE=s160-c-k-c0x00ffffff-no-rj" },
  { name: "Design Code", live: true, img: "https://yt3.googleusercontent.com/ytc/AIdro_kjS7vMgDa9LvlB6L5jLY-AX-oIU6it19KBxGVXhIrKxFc=s160-c-k-c0x00ffffff-no-rj" },
  { name: "Fire Ship", live: true, img: "https://yt3.googleusercontent.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s160-c-k-c0x00ffffff-no-rj" },
  { name: "Gotham Chess", live: true, img: "https://yt3.googleusercontent.com/ytc/AIdro_lJ4RQwl-WnWQ_3AgLxvPrLkVdfLHPCRKMxUtLJnjUkhkg=s160-c-k-c0x00ffffff-no-rj" },
];

export default function Sidebar() {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early Return Pattern
  if(!isMenuOpen) return null;

  return (
    <aside className="w-64 bg-[#0f0f0f] text-white p-3 space-y-4 overflow-y-auto hidden md:block">
      {/* Sections */}
      {sidebarItems.map((section, idx) => (
        <div key={idx}>
          {section.section && (
            <div className="text-sm font-semibold text-gray-400 mb-1">
              {section.section}
            </div>
          )}
          <div className="space-y-1">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center px-3 py-2 rounded-lg hover:bg-[#272727] cursor-pointer transition"
              >
                {item.icon}
                <span className="ml-3 flex-1">{item.label}</span>
                {item.badge && <Dot className="text-blue-500" size={24} />}
              </div>
            ))}
          </div>
          <hr className="my-3 border-[#333]" />
        </div>
      ))}

      {/* Subscriptions */}
      <div>
        <div className="text-sm font-semibold text-gray-400 mb-1">
          Subscriptions
        </div>
        <div className="space-y-1">
          {subscriptions.map((sub, i) => (
            <div
              key={i}
              className="flex items-center px-3 py-2 rounded-lg hover:bg-[#272727] cursor-pointer transition"
            >
              <img
                src={sub.img}
                alt={sub.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="ml-3 flex-1 truncate">{sub.name}</span>
              {sub.live && <span className="text-red-500 text-xs">●</span>}
            </div>
          ))}
          <div className="px-3 py-2 text-sm hover:bg-[#272727] rounded-lg cursor-pointer">
            Show more
          </div>
        </div>
      </div>
    </aside>
  );
}
