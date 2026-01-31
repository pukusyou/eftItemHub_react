import React, { useState } from "react";
import OffCanvas from "./ItemOffcanvas";
import { resolvePublicPath } from "../utils/publicPath";
import type { ItemCardProps } from "../types";

const Item = ({ itemName, img, tasks, num, inRaid }: ItemCardProps) => {
  const [show, setShow] = useState(false);
  const [, setIsHovered] = useState(false);

  const handleCanvas = () => {
    setShow(!show);
  };

  const isInRaid = inRaid === "inRaid";

  return (
    <>
      <OffCanvas
        show={show}
        onHide={handleCanvas}
        title={itemName}
        num={num}
        tasks={tasks}
        img={img}
        inRaid={inRaid}
      />

      {/* Main Card Container */}
      <div
        onClick={handleCanvas}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-full min-h-[140px] w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(245,158,11,0.15)] cursor-pointer"
      >
        {/* Item Name */}
        <div className="border-b border-white/5 bg-black/20 px-2 py-2">
          <h3 className="truncate text-center font-heading text-xs font-semibold uppercase tracking-wider text-slate-100 sm:text-sm">
            {itemName}
          </h3>
        </div>

        {/* Item Image */}
        <div className="flex flex-1 items-center justify-center p-2 transition-colors duration-300 group-hover:bg-accent-primary/5">
          <img
            src={resolvePublicPath(img)}
            alt={itemName}
            className="max-h-[70px] max-w-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]"
            loading="lazy"
          />
        </div>

        {/* Item Info Footer */}
        <div className="flex items-center justify-between border-t border-white/5 bg-black/20 px-2 py-1.5">
          {/* Count */}
          <span className="font-heading text-base font-bold text-slate-100">
            ×{num}
          </span>

          {/* InRaid Badge */}
          <span
            className={`rounded-sm border px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider ${
              isInRaid
                ? "border-red-500/30 bg-red-500/10 text-red-500"
                : "border-green-500/30 bg-green-500/10 text-green-500"
            }`}
          >
            {isInRaid ? "FIR" : "ANY"}
          </span>
        </div>
      </div>
    </>
  );
};

export default Item;
