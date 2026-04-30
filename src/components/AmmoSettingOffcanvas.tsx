import AmmoSelecter from "./AmmoSelecter";
import type { SelectOption } from "../types";

function makeOptions(array: string[]): SelectOption[] {
  return array.map((element) => ({ value: element, label: element }));
}

interface AmmoSettingOffcanvasProps {
  setShowSetting: (value: boolean) => void;
  canvasShow: boolean;
  caliber: SelectOption;
  setCaliber: (value: SelectOption) => void;
  caliberList: string[];
}

const AmmoSettingOffcanvas = ({
  setShowSetting,
  canvasShow,
  caliber,
  setCaliber,
  caliberList,
}: AmmoSettingOffcanvasProps) => {
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

        <div className="px-6 py-6">
          <div
            style={{
              padding: "1.5rem",
              background:
                "linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              boxShadow:
                "0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative background element */}
            <div
              style={{
                position: "absolute",
                top: "-50%",
                right: "-10%",
                width: "150px",
                height: "150px",
                background:
                  "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            {/* Icon and Label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  borderRadius: "8px",
                  fontSize: "1.2rem",
                  boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                }}
              >
                🎯
              </div>
              <label
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#f59e0b",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: 0,
                }}
              >
                口径選択
              </label>
            </div>

            {/* Selector */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <AmmoSelecter
                options={makeOptions(caliberList) as any}
                setSelectedValue={(value) => {
                  if (value) {
                    setCaliber(value as SelectOption);
                  }
                }}
                value={caliber as any}
                isSearchable={true}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "0.85rem",
                color: "#94a3b8",
                marginTop: "1rem",
                marginBottom: 0,
                lineHeight: 1.5,
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "1rem",
                }}
              >
                ℹ️
              </span>
              表示する弾薬の口径を選択してください
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmmoSettingOffcanvas;
