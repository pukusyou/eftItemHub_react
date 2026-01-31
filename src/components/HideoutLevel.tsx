import { useRef, useState } from "react";
import type { HideoutLevelProps } from "../types";

function saveLocalStorage(hideoutName: string, value: string) {
  if (window.localStorage) {
    localStorage.setItem(hideoutName, value);
  }
}

function getLocalStorage(hideoutName: string) {
  if (window.localStorage) {
    return localStorage.getItem(hideoutName) ?? "0";
  }
  return "0";
}

const HideoutLevel = ({ hideoutName, max }: HideoutLevelProps) => {
  const [selectedValue, setSelectedValue] = useState(
    getLocalStorage(hideoutName),
  );
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const handleSelectChange = () => {
    if (!selectRef.current) {
      return;
    }
    setSelectedValue(selectRef.current.value);
    saveLocalStorage(hideoutName, selectRef.current.value);
  };

  return (
    <>
      <div className="relative">
        <select
          ref={selectRef}
          className="w-full appearance-none rounded-md border border-white/10 bg-bg-tertiary px-3 py-2.5 pr-10 font-heading text-sm font-semibold text-slate-100 outline-none transition-all duration-200 hover:border-white/20 hover:bg-bg-card focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30 cursor-pointer"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value={0}>未建設</option>
          <option value={1}>Lv.1</option>
          {max >= 2 ? <option value={2}>Lv.2</option> : null}
          {max >= 3 ? <option value={3}>Lv.3</option> : null}
          {max >= 4 ? <option value={4}>Lv.4</option> : null}
          {max >= 5 ? <option value={5}>Lv.5</option> : null}
          {max >= 6 ? <option value={6}>Lv.6</option> : null}
        </select>
        {/* Custom dropdown arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="h-4 w-4 text-slate-400 transition-colors group-hover:text-accent-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
export default HideoutLevel;
