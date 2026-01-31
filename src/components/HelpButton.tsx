import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";

interface HelpButtonProps {
  handleDescriptionClick: () => void;
}

const HelpButton = ({ handleDescriptionClick }: HelpButtonProps) => {
  return (
    <>
      {isMobile ? (
        <button
          className="mb-2 inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white"
          onClick={handleDescriptionClick}
        >
          <FontAwesomeIcon icon={faQuestionCircle} />
        </button>
      ) : (
        //改行はなしで、右寄せにする
        <button
          className="mb-2 inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-semibold tracking-[0.05em] text-slate-200 transition hover:border-white/40 hover:text-white"
          onClick={handleDescriptionClick}
        >
          <FontAwesomeIcon icon={faQuestionCircle} /> Help
        </button>
      )}
    </>
  );
};
export default HelpButton;
