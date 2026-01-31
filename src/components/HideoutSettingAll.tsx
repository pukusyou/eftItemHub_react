import ButtonComp from "./ButtonComp";
import { useState } from "react";
import Footer from "./Footer";
import HideoutSelect from "./HideoutSelect";
import BackButton from "./BackButton";

const HideoutSettingAll = () => {
  const pageUrl = "https://wikiwiki.jp/eft/%E9%9A%A0%E3%82%8C%E5%AE%B6";
  const pageName = "隠れ家";
  const [lang, setLang] = useState<"en" | "jp">(
    (localStorage.getItem("lang") as "en" | "jp") || "en",
  );

  const handleChangeLang = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextLang = e.currentTarget.id === "jp" ? "jp" : "en";
    localStorage.setItem("lang", nextLang);
    setLang(nextLang);
  };

  return (
    <>
      {/* Action Bar */}
      <div className="sticky top-[56px] z-[999] flex flex-wrap items-center justify-end gap-2 border-b border-border bg-[rgba(10,10,15,0.95)] px-4 py-3 backdrop-blur-md">
        <BackButton link={"/"} />
      </div>

      <div className="min-h-screen px-4">
        {/* Page Header */}
        <div className="py-8 text-center">
          <h1 className="m-0 bg-gradient-gold bg-clip-text font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[0.05em] uppercase text-transparent">
            ハイドアウト進行状況
          </h1>
          <p className="mt-2 text-[0.9rem] text-text-secondary">
            完了したハイドアウトをチェックして、必要なアイテムを確認しましょう
          </p>
        </div>

        {/* Controls Section */}
        <div className="mx-auto mb-8 flex max-w-[600px] flex-col items-center gap-6 rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] p-6 shadow-md">
          {/* Language Toggle */}
          <div className="flex flex-col items-center">
            <label className="mb-3 block font-heading text-sm font-bold uppercase tracking-wider text-accent-primary">
              表示言語
            </label>
            <div className="flex gap-2 rounded-lg border border-white/10 bg-[#1a1a25] p-1">
              <button
                id="en"
                onClick={handleChangeLang}
                className={`cursor-pointer rounded-md border-none px-6 py-2 font-heading text-sm font-bold tracking-wider transition-all duration-200 ${
                  lang === "en"
                    ? "bg-gradient-gold text-black shadow-sm"
                    : "bg-transparent text-[#94a3b8] hover:text-slate-100"
                }`}
              >
                English
              </button>
              <button
                id="jp"
                onClick={handleChangeLang}
                className={`cursor-pointer rounded-md border-none px-6 py-2 font-heading text-sm font-bold tracking-wider transition-all duration-200 ${
                  lang !== "en"
                    ? "bg-gradient-gold text-black shadow-sm"
                    : "bg-transparent text-[#94a3b8] hover:text-slate-100"
                }`}
              >
                日本語
              </button>
            </div>
          </div>

          {/* Confirm Button */}
          <ButtonComp str={"決定"} link={"/hideout/item/"} />
        </div>

        {/* Hideout Selection Area */}
        <HideoutSelect lang={lang} />
      </div>

      <Footer pageUrl={pageUrl} pageName={pageName} />
    </>
  );
};

export default HideoutSettingAll;
