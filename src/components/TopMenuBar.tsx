const TopMenuBar = () => {
  return (
    <div className="sticky top-0 z-1000 w-full border-b border-white/10 bg-[rgba(10,10,15,0.95)] px-6 py-4 backdrop-blur-md shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo Area */}
        <a href="/" className="flex items-center gap-3 decoration-0 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-md border border-accent-primary/30 bg-accent-primary/10 p-1 transition-all duration-300 group-hover:border-accent-primary group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <img
              src="/img/logo_icon.png"
              alt="Logo"
              className="h-full w-full object-contain opacity-90 transition-all duration-300 group-hover:opacity-100"
              onError={(e) =>
                ((e.target as HTMLImageElement).style.display = "none")
              }
            />
          </div>
          <span className="font-heading text-xl font-bold tracking-wider text-slate-100 transition-colors group-hover:text-accent-primary">
            EFT ITEM HUB
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { name: "TASK", path: "/task/" },
            { name: "HIDEOUT", path: "/hideout/" },
            { name: "AMMO", path: "/ammo/" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="relative px-4 py-2 font-heading text-sm font-bold tracking-widest text-slate-400 transition-all duration-300 hover:text-accent-primary hover:bg-white/5 rounded-md group overflow-hidden"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-accent-primary transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button (Visible only on mobile) */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 text-slate-400 hover:text-accent-primary">
          <span className="h-0.5 w-6 bg-current transition-all" />
          <span className="h-0.5 w-6 bg-current transition-all" />
          <span className="h-0.5 w-6 bg-current transition-all" />
        </button>
      </div>
    </div>
  );
};
export default TopMenuBar;
