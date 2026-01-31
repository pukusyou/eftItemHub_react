import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ModalCompProps {
  url: string;
  showBool: boolean;
  setShowBool: (value: boolean) => void;
}

const ModalComp = ({ url, showBool, setShowBool }: ModalCompProps) => {
  const [copyButtonText, setCopyButtonText] = useState("コピー");
  const [copied, setCopied] = useState(false);

  const handleClose = () => {
    setShowBool(false);
    setCopyButtonText("コピー");
    setCopied(false);
  };

  const handleCopyButtonText = () => {
    setCopyButtonText("コピーしました！");
    setCopied(true);
  };

  if (!showBool) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="モーダルを閉じる"
        className="absolute inset-0 bg-black/70"
        onClick={handleClose}
      />
      <div className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <h2 className="font-['Rajdhani'] text-xl font-bold tracking-[0.05em]">
            共有
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400 transition hover:border-white/20 hover:text-slate-200"
          >
            閉じる
          </button>
        </div>

        <div className="space-y-3 px-6 py-5">
          <label className="block font-['Rajdhani'] text-sm font-semibold uppercase tracking-[0.05em] text-amber-400">
            共有URL
          </label>
          <input
            type="url"
            value={url}
            readOnly={true}
            className="w-full rounded-md border border-white/10 bg-[var(--color-bg-tertiary,#1a1a25)] px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
          />
          <p className="text-sm text-slate-400">
            このURLを共有すると、現在のチェック状態を他の人と共有できます。
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-white/10 px-6 py-4">
          <CopyToClipboard text={url}>
            <button
              type="button"
              onClick={handleCopyButtonText}
              className={`rounded-md px-6 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] text-black transition ${
                copied
                  ? "bg-[linear-gradient(135deg,#22c55e_0%,#16a34a_100%)]"
                  : "bg-[linear-gradient(135deg,#3b82f6_0%,#1d4ed8_100%)]"
              }`}
            >
              {copyButtonText}
            </button>
          </CopyToClipboard>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-md border border-white/10 px-6 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] text-slate-400 transition hover:border-white/20 hover:text-slate-200"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComp;
