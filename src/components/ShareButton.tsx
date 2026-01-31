import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";

interface ShareButtonProps {
  set?: (value: boolean) => void;
}

const ShareButton = ({ set }: ShareButtonProps) => {
  const handleShow = () => {
    if (set) {
      set(true);
    }
  };

  return (
    <button
      onClick={handleShow}
      className="inline-flex items-center gap-2 rounded-md border border-blue-500/20 bg-blue-500/10 px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-blue-500 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/20"
    >
      <FontAwesomeIcon icon={faShareFromSquare} />
      {!isMobile && "Share"}
    </button>
  );
};

export default ShareButton;
