import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import type { SettingBarProps } from "../types";

const SettingBar = ({ setShowSetting }: SettingBarProps) => {
  const handleSettingClick = () => {
    setShowSetting(true);
  };

  return (
    <button
      onClick={handleSettingClick}
      className="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-transparent px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-text-secondary transition-all duration-200 hover:bg-white/5 hover:border-white/15 hover:text-slate-100"
    >
      <FontAwesomeIcon
        icon={faCog}
        className="transition-transform duration-300 group-hover:rotate-90"
      />
      {!isMobile && "Setting"}
    </button>
  );
};

export default SettingBar;
