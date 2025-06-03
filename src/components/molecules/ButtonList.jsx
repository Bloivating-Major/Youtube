import { useState } from "react";
import Button from "../atoms/Button";

const categories = [
  "All", "Music", "Gaming", "Checkmates", "React routers", "JavaScript",
  "Mixes", "Source code", "AI", "Podcasts", "Reverberation", "Thoughts",
  "Satsang", "Live", "Qawwali music", "Ambient Music", "Comedy", 
  "New to you" , "Watched", "Recently Uploaded"
];

export default function ButtonList() {
  const [active, setActive] = useState("All");

  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-2 px-4 py-3 w-max min-w-full bg-[#0f0f0f]">
        {categories.map((category) => (
          <Button
            key={category}
            label={category}
            active={active === category}
            onClick={() => setActive(category)}
          />
        ))}
      </div>
    </div>
  );
}
