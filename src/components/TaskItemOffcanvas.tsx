import React, { useState } from "react";

type ToggleChangeEvent = { target: { checked: boolean } };

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange?: (event: ToggleChangeEvent) => void;
  description?: string;
  icon?: string;
}

const ToggleSwitch = ({
  label,
  checked,
  onChange,
  description,
  icon,
}: ToggleSwitchProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = (e: React.MouseEvent | React.ChangeEvent) => {
    // Prevent event bubbling issues
    e.stopPropagation();
    if (onChange) {
      // Create a synthetic event-like object expected by the parent
      onChange({ target: { checked: !checked } });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 1.5rem",
        background: isHovered
          ? "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.05) 100%)"
          : "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
        borderRadius: "12px",
        border: isHovered
          ? "1px solid rgba(245, 158, 11, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        marginBottom: "1rem",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateX(4px)" : "translateX(0)",
        boxShadow: isHovered
          ? "0 4px 20px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 2px 8px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleToggle}
    >
      {/* Animated background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: isHovered ? 0 : "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.05), transparent)",
          transition: "left 0.6s ease",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Icon */}
        {icon && (
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: checked
                ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                : "rgba(255, 255, 255, 0.05)",
              borderRadius: "10px",
              fontSize: "1.2rem",
              transition: "all 0.3s ease",
              boxShadow: checked
                ? "0 4px 12px rgba(245, 158, 11, 0.3)"
                : "none",
            }}
          >
            {icon}
          </div>
        )}

        <div>
          <div
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              fontSize: "1.1rem",
              color: checked ? "#f59e0b" : "#f8fafc",
              marginBottom: description ? "0.25rem" : 0,
              transition: "color 0.3s ease",
              letterSpacing: "0.02em",
            }}
          >
            {label}
          </div>
          {description && (
            <div
              style={{
                fontSize: "0.85rem",
                color: "#94a3b8",
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>

      <label
        style={{
          position: "relative",
          display: "inline-block",
          width: "60px",
          height: "32px",
          cursor: "pointer",
          flexShrink: 0,
          marginLeft: "1rem",
          zIndex: 1,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          style={{
            opacity: 0,
            width: 0,
            height: 0,
          }}
        />
        <span
          style={{
            position: "absolute",
            cursor: "pointer",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: checked
              ? "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)"
              : "rgba(100, 116, 139, 0.3)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            borderRadius: "32px",
            border: checked
              ? "2px solid #f59e0b"
              : "2px solid rgba(255, 255, 255, 0.15)",
            boxShadow: checked
              ? "0 0 20px rgba(245, 158, 11, 0.4), inset 0 1px 3px rgba(0, 0, 0, 0.2)"
              : "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span
            style={{
              position: "absolute",
              content: '""',
              height: "24px",
              width: "24px",
              left: checked ? "30px" : "2px",
              bottom: "2px",
              background: checked
                ? "linear-gradient(135deg, #000 0%, #1a1a1a 100%)"
                : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              borderRadius: "50%",
              boxShadow: checked
                ? "0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.5)"
                : "0 2px 6px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Checkmark or X icon */}
            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: checked ? "#f59e0b" : "#64748b",
              }}
            >
              {checked ? "✓" : "✕"}
            </span>
          </span>
        </span>
      </label>
    </div>
  );
};

interface TaskItemOffCanvasProps {
  setShowSetting: (value: boolean) => void;
  setKeySetting: (value: boolean) => void;
  canvasShow: boolean;
  keyShow: boolean;
  setLootSetting: (value: boolean) => void;
  lootShow: boolean;
  setWeponSetting: (value: boolean) => void;
  weponShow: boolean;
  setInRaidSetting: (value: boolean) => void;
  inRaidShow: boolean;
}

const TaskItemOffCanvas = ({
  setShowSetting,
  setKeySetting,
  canvasShow,
  keyShow,
  setLootSetting,
  lootShow,
  setWeponSetting,
  weponShow,
  setInRaidSetting,
  inRaidShow,
}: TaskItemOffCanvasProps) => {
  const handleClose = () => setShowSetting(false);

  if (!canvasShow) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-1050 flex items-start justify-center px-4 py-6">
      <button
        type="button"
        aria-label="閉じる"
        className="absolute inset-0 bg-black/70"
        onClick={handleClose}
      />
      <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <h2 className="font-['Rajdhani'] text-xl font-bold tracking-[0.05em]">
            表示設定
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 transition hover:border-white/20 hover:text-slate-200"
          >
            閉じる
          </button>
        </div>
        <div className="space-y-4 px-6 py-6">
          <ToggleSwitch
            label="鍵の表示"
            description="鍵アイテムを表示します"
            icon="🔑"
            checked={keyShow}
            onChange={(e) => setKeySetting(e.target.checked)}
          />

          <ToggleSwitch
            label="ルート品の表示"
            description="ルートアイテムを表示します"
            icon="💎"
            checked={lootShow}
            onChange={(e) => setLootSetting(e.target.checked)}
          />

          <ToggleSwitch
            label="装備品の表示"
            description="武器・装備アイテムを表示します"
            icon="🔫"
            checked={weponShow}
            onChange={(e) => setWeponSetting(e.target.checked)}
          />

          <ToggleSwitch
            label="インレイド品のみ表示"
            description="レイド内で入手が必要なアイテムのみ表示します"
            icon="⚠️"
            checked={inRaidShow}
            onChange={(e) => setInRaidSetting(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskItemOffCanvas;
