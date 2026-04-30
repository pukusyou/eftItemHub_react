import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";

function makeTags(
  bookMarkList: string[],
  selectedBookmark: string | null,
  setSelectedBookmark: (value: string) => void,
) {
  const tags: React.ReactNode[] = [];
  if (bookMarkList.length > 0) {
    bookMarkList.forEach((bookMark) => {
      const isSelected = selectedBookmark === bookMark;
      tags.push(
        <div
          key={bookMark}
          onClick={() => setSelectedBookmark(bookMark)}
          className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 mb-2 transition-all duration-200 ${
            isSelected
              ? "border-amber-500/30 bg-amber-500/10"
              : "border-white/10 bg-bg-tertiary hover:border-white/20"
          }`}
        >
          <span
            className={`flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 transition-all duration-200 ${
              isSelected
                ? "border-amber-500 bg-amber-500"
                : "border-white/20 bg-transparent"
            }`}
          >
            {isSelected && <span className="h-2 w-2 rounded-full bg-black" />}
          </span>
          <span
            className={`font-heading text-[0.95rem] font-semibold ${
              isSelected ? "text-amber-500" : "text-slate-100"
            }`}
          >
            {bookMark.replace("bookMark_", "")}
          </span>
        </div>,
      );
    });
  }
  return tags;
}

interface LoadButtonProps {
  setShowLoadModal?: (value: boolean) => void;
  showLoadModal?: boolean;
  bookMarkList?: string[] | (() => string[]);
  setIdList?: (value: number[]) => void;
  setMissions?: (value: number[]) => void;
}

const LoadButton = ({
  setShowLoadModal,
  showLoadModal,
  bookMarkList,
  setIdList,
  setMissions,
}: LoadButtonProps) => {
  const [internalShow, setInternalShow] = useState(false);
  const getBookMarkList = () => {
    if (typeof bookMarkList === "function") {
      return bookMarkList();
    }
    if (Array.isArray(bookMarkList)) {
      return bookMarkList;
    }
    const listKey = "book_mark_name_list";
    if (window.localStorage && localStorage.getItem(listKey) !== null) {
      try {
        return JSON.parse(localStorage.getItem(listKey) ?? "[]") as string[];
      } catch {
        return [];
      }
    }
    return [];
  };
  const [bookMarkname, setBookMarkName] = useState(() => getBookMarkList());
  const [selectedBookmark, setSelectedBookmark] = useState<string | null>(null);
  const modalOpen =
    typeof showLoadModal === "boolean" ? showLoadModal : internalShow;
  const setModalOpen = setShowLoadModal ?? setInternalShow;
  const applyLoadedIds = setIdList ?? setMissions;

  const handleShow = () => {
    setBookMarkName(getBookMarkList());
    setSelectedBookmark(null);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleLoad = () => {
    if (selectedBookmark) {
      const bookMark = JSON.parse(
        localStorage.getItem(selectedBookmark) ?? "[]",
      ) as number[];
      if (applyLoadedIds) {
        applyLoadedIds(bookMark);
      }
      setModalOpen(false);
    }
  };

  const handleRemove = () => {
    if (selectedBookmark) {
      localStorage.removeItem(selectedBookmark);
      const json = JSON.stringify(
        getBookMarkList().filter((n) => n !== selectedBookmark),
        undefined,
        1,
      );
      localStorage.setItem("book_mark_name_list", json);
      setBookMarkName(getBookMarkList());
      setSelectedBookmark(null);
    }
  };

  const renderedTags = useMemo(
    () => makeTags(bookMarkname, selectedBookmark, setSelectedBookmark),
    [bookMarkname, selectedBookmark],
  );

  return (
    <>
      <button
        onClick={handleShow}
        className="inline-flex items-center gap-2 rounded-md border border-purple-500/20 bg-purple-500/10 px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-purple-500 transition-all duration-200 hover:border-purple-500/30 hover:bg-purple-500/20"
      >
        <FontAwesomeIcon icon={faBarsProgress} />
        {!isMobile && "Load"}
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            aria-label="閉じる"
            className="absolute inset-0 bg-black/70"
            onClick={handleClose}
          />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <h2 className="font-['Rajdhani'] text-xl font-bold tracking-[0.05em]">
                読み込み
              </h2>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 transition hover:border-white/20 hover:text-slate-200"
              >
                閉じる
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto px-6 py-5">
              {renderedTags.length > 0 ? (
                renderedTags
              ) : (
                <div className="py-8 text-center text-slate-400">
                  ブックマークがありません
                </div>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2 border-t border-white/10 px-6 py-4">
              <button
                type="button"
                onClick={handleRemove}
                disabled={!selectedBookmark}
                className={`rounded-md border px-4 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] ${
                  selectedBookmark
                    ? "border-red-500/40 bg-red-500/10 text-red-400"
                    : "cursor-not-allowed border-white/10 text-white/30"
                }`}
              >
                削除
              </button>
              <button
                type="button"
                onClick={handleLoad}
                disabled={!selectedBookmark}
                className={`rounded-md px-6 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] ${
                  selectedBookmark
                    ? "bg-[linear-gradient(135deg,#f59e0b_0%,#d97706_100%)] text-black"
                    : "cursor-not-allowed bg-white/10 text-white/30"
                }`}
              >
                読み込み
              </button>
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
      )}
    </>
  );
};

export default LoadButton;
