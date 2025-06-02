import clsx from "clsx";

export default function Button({ label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "text-sm px-4 py-1.5 rounded-lg whitespace-nowrap",
        active
          ? "bg-white text-black font-medium"
          : "bg-[#272727] text-white hover:bg-[#3f3f3f] transition"
      )}
    >
      {label}
    </button>
  );
}
