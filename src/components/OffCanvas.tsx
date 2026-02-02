import type { SettingBarProps } from "../types";

interface OffCanvasProps extends SettingBarProps {
  setItemSetting: (value: boolean) => void;
  canvasShow: boolean;
  itemSetting: boolean;
}

const OffCanvas = ({
  setShowSetting,
  setItemSetting,
  canvasShow,
  itemSetting,
}: OffCanvasProps) => {
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
      <div className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 1.5rem",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#f8fafc",
                  marginBottom: "0.25rem",
                }}
              >
                直近のレベルのみ表示
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#94a3b8",
                }}
              >
                次のレベルに必要なアイテムのみを表示します
              </div>
            </div>

            {/* Custom Toggle Switch */}
            <label
              style={{
                position: "relative",
                display: "inline-block",
                width: "60px",
                height: "32px",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={itemSetting}
                onChange={(e) => setItemSetting(e.target.checked)}
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
                  background: itemSetting
                    ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                    : "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  borderRadius: "32px",
                  border: itemSetting
                    ? "2px solid #f59e0b"
                    : "2px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    content: '""',
                    height: "24px",
                    width: "24px",
                    left: itemSetting ? "30px" : "2px",
                    bottom: "2px",
                    background: itemSetting ? "#000" : "#f8fafc",
                    transition: "all 0.3s ease",
                    borderRadius: "50%",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
