import { useState } from "react";
import Logo from "../logo.webp";

const Bar = () => {
  const homepage = import.meta.env.VITE_HOMEPAGE || "";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <a href={homepage + "/"} className="navbar-brand">
          <img
            src={Logo}
            alt="EFT Item Hub"
            width="50"
            height="50"
            style={{ marginRight: "0.75rem" }}
          />
          EFT Item Hub
        </a>
        <button
          type="button"
          aria-label="メニューを開閉"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 rounded border border-(--color-border) p-2 lg:hidden"
        >
          <span className="block h-0.5 w-5 rounded-sm bg-(--color-accent-primary)" />
          <span className="block h-0.5 w-5 rounded-sm bg-(--color-accent-primary)" />
          <span className="block h-0.5 w-5 rounded-sm bg-(--color-accent-primary)" />
        </button>
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href={homepage + "/task/"}
            className="nav-link flex items-center gap-2"
          >
            <span>📋</span>
            Task
          </a>
          <a
            href={homepage + "/hideout/"}
            className="nav-link flex items-center gap-2"
          >
            <span>🏠</span>
            Hideout
          </a>
          <a
            href={homepage + "/ammo/"}
            className="nav-link flex items-center gap-2"
          >
            <span>🔫</span>
            Ammo
          </a>
        </nav>
      </div>
      {isOpen && (
        <div className="border-t border-(--color-border) bg-[rgba(10,10,15,0.98)] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            <a
              href={homepage + "/task/"}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2">📋</span>
              Task
            </a>
            <a
              href={homepage + "/hideout/"}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2">🏠</span>
              Hideout
            </a>
            <a
              href={homepage + "/ammo/"}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-2">🔫</span>
              Ammo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Bar;
