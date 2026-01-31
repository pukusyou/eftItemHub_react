import { resolvePublicPath } from "../utils/publicPath";
import type { ItemOffCanvasProps } from "../types";

const ItemOffCanvas = ({
  show,
  onHide,
  title,
  tasks,
  img,
  inRaid,
}: ItemOffCanvasProps) => {
  const taskTags = tasks.map((task) => {
    const itemNum = task["num"] !== -1 ? "x" + task["num"] : "タスクで使用";
    return (
      <li key={task["name"]}>
        <a href={task["url"]} target="_blank" rel="noreferrer">
          {task["name"]}
        </a>
        <p>{itemNum}</p>
      </li>
    );
  });

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1050] flex justify-end">
      <button
        type="button"
        aria-label="閉じる"
        className="absolute inset-0 bg-black/70"
        onClick={onHide}
      />
      <aside className="relative h-full w-full max-w-md overflow-y-auto border-l border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h2 className="font-['Rajdhani'] text-lg font-bold tracking-[0.05em]">
              {title}
            </h2>
            <p
              className={`mt-1 text-sm font-semibold ${inRaid === "inRaid" ? "text-red-400" : "text-emerald-400"}`}
            >
              {inRaid}
            </p>
          </div>
          <button
            type="button"
            onClick={onHide}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 transition hover:border-white/20 hover:text-slate-200"
          >
            閉じる
          </button>
        </div>
        <div className="space-y-4 px-6 py-5">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[var(--color-bg-card,#16161f)]">
            <img
              src={resolvePublicPath(img)}
              alt={title}
              className="h-48 w-full object-cover"
            />
            <div className="space-y-2 p-4">
              <h3 className="font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] text-slate-100">
                タスク
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">{taskTags}</ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default ItemOffCanvas;
