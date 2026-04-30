import wallPaper from "../logo.png";

const TopImage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Glow effect behind logo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <img
        src={wallPaper}
        alt="EFT Item Hub Logo"
        className="hero-logo"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "min(80%, 400px)",
          height: "auto",
        }}
      />

      {/* Tagline */}
      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
          color: "var(--color-text-secondary)",
          textAlign: "center",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.05em",
          position: "relative",
          zIndex: 1,
        }}
      >
        タスク・ハイドアウトで必要なアイテムを効率的に管理
      </p>

      {/* CTA Buttons */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <a
          href={(import.meta.env.VITE_HOMEPAGE || "") + "/task/"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#ea580c_0%,#9a3412_100%)] px-8 py-3.5 font-['Rajdhani'] text-base font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_24px_rgba(234,88,12,0.45)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(234,88,12,0.6)]"
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
        >
          <span className="text-lg">📋</span>
          タスク管理
        </a>
        <a
          href={(import.meta.env.VITE_HOMEPAGE || "") + "/hideout/"}
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 bg-transparent px-8 py-3.5 font-['Rajdhani'] text-base font-bold uppercase tracking-[0.08em] text-slate-200 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/40 hover:bg-white/5 hover:text-white"
        >
          <span className="text-lg">🏠</span>
          ハイドアウト
        </a>
      </div>
    </div>
  );
};

export default TopImage;
