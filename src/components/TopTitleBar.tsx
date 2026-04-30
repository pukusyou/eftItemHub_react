interface TopTitleBarProps {
  title: string;
}

const TopTitleBar = ({ title }: TopTitleBarProps) => {
  return (
    <div className="relative mx-auto my-8 flex w-full items-center justify-center border-x-[3px] border-accent-primary bg-[linear-gradient(90deg,transparent,var(--color-bg-tertiary),transparent)] px-8 py-2">
      <div className="flex items-center gap-4">
        {/* Left decorative line */}
        <span className="block h-0.5 w-15 bg-[linear-gradient(90deg,var(--color-accent-primary),transparent)]" />

        {/* Diamond icon */}
        <span className="block h-2 w-2 rotate-45 bg-accent-primary" />

        {/* Title */}
        <h2 className="m-0 whitespace-nowrap bg-[linear-gradient(90deg,transparent,rgba(26,26,37,0.8),transparent)] px-4 py-2 font-heading text-[clamp(1.2rem,3vw,1.5rem)] font-bold uppercase tracking-widest text-text-primary">
          {title}
        </h2>

        {/* Diamond icon */}
        <span className="block h-2 w-2 rotate-45 bg-accent-primary" />

        {/* Right decorative line */}
        <span className="block h-0.5 w-15 rotate-180 bg-[linear-gradient(90deg,var(--color-accent-primary),transparent)]" />
      </div>
    </div>
  );
};

export default TopTitleBar;
