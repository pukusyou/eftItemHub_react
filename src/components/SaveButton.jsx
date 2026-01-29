import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from "react-device-detect";
import data from '../json/task_with_id.json';

function saveBookMark(name) {
    if (window.localStorage) {
        name = "bookMark_" + name;
        let array = [];
        const bookMarkName = "book_mark_name_list";
        if (localStorage.getItem(bookMarkName) !== null) {
            let json = localStorage.getItem(bookMarkName);
            array = JSON.parse(json);
            if (array.length > 4) {
                throw new Error("ブックマークは5つまでです");
            } else if (array.includes(name)) {
                throw new Error("同じ名前のブックマークは作成できません");
            }
        }
        if (name.length === 0 || !name) {
            throw new Error("ブックマーク名を入力してください");
        } else if (name.indexOf(" ") >= 0) {
            throw new Error("空白は含めないでください");
        } else if (Object.keys(localStorage).includes(name) || name === bookMarkName) {
            throw new Error("別の名前を入力してください");
        } else if (!name.match((/^[0-9a-zA-Z_]*$/))) {
            throw new Error("アルファベット、数字のみ使用できます");
        } else if (name.length > 25) {
            throw new Error("25文字以内で入力してください");
        }
        let json = JSON.stringify(array.concat(name), undefined, 1);
        localStorage.setItem(bookMarkName, json);
        return true;
    }
    throw new Error("ブックマークの保存に失敗しました");
}

function getLocalStorageId(dealerName) {
    if (window.localStorage && localStorage.getItem(dealerName) !== null) {
        let json = localStorage.getItem(dealerName);
        let array = JSON.parse(json);
        return array;
    }
}

const SaveButton = ({ showBool, setShowBool, textBox, setTextBox }) => {
    const [err, setErr] = useState("");
    const [ok, setOk] = useState("");

    const handleClose = () => setShowBool(false);
    const handleSaveClick = () => setShowBool(true);

    const handleSave = () => {
        try {
            setErr("");
            saveBookMark(textBox);
            setOk("保存しました");
            let taskIds = [];
            Object.keys(data).forEach(dealer => {
                taskIds = taskIds.concat(getLocalStorageId(dealer));
            });
            localStorage.setItem("bookMark_" + textBox, JSON.stringify(taskIds, undefined, 1));
        } catch (error) {
            setOk("");
            setErr(error.message);
        }
        setTextBox("");
    };

    useEffect(() => {
        setErr("");
        setOk("");
    }, [showBool]);

    return (
        <>
            <button
                onClick={handleSaveClick}
                className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-green-500/10 px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-green-500 transition-all duration-200 hover:border-green-500/30 hover:bg-green-500/20"
            >
                <FontAwesomeIcon icon={faSave} />
                {!isMobile && 'Save'}
            </button>

            {showBool && (
                <div className="fixed inset-0 z-[1100] flex items-center justify-center px-4 py-8">
                    <button
                        type="button"
                        aria-label="閉じる"
                        className="absolute inset-0 bg-black/70"
                        onClick={handleClose}
                    />
                    <div className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#1a1a25_0%,#12121a_100%)] text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                            <h2 className="font-['Rajdhani'] text-xl font-bold tracking-[0.05em]">保存</h2>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400 transition hover:border-white/20 hover:text-slate-200"
                            >
                                閉じる
                            </button>
                        </div>

                        <div className="space-y-3 px-6 py-5">
                            <label className="block font-['Rajdhani'] text-base font-semibold text-amber-400">
                                ブックマーク名
                            </label>
                            <p className="text-sm text-slate-400">
                                アルファベット大文字・小文字、数字で入力してください (25文字以内)
                            </p>
                            <input
                                type="text"
                                value={textBox}
                                onChange={(event) => setTextBox(event.target.value)}
                                className="w-full rounded-md border border-white/10 bg-[var(--color-bg-tertiary,#1a1a25)] px-4 py-3 text-base text-slate-100 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                            />
                            {err && (
                                <p className="text-sm text-red-400">
                                    {err}
                                </p>
                            )}
                            {ok && (
                                <p className="text-sm text-emerald-400">
                                    {ok}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-white/10 px-6 py-4">
                            <button
                                type="button"
                                onClick={handleSave}
                                className="rounded-md bg-[linear-gradient(135deg,#22c55e_0%,#16a34a_100%)] px-6 py-2 font-['Rajdhani'] text-sm font-semibold tracking-[0.05em] text-black"
                            >
                                保存
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
    )
}

export default SaveButton;
