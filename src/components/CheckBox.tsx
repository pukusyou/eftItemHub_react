import React from "react";
import data from "../json/task_with_id.json";
import type { MissionOption, TaskData } from "../types";

const taskData = data as TaskData;

function array2dict(array: string[]) {
  const missions: MissionOption[] = [];
  array.forEach((element) => {
    Object.keys(taskData).forEach((dealer) => {
      Object.keys(taskData[dealer]).some((task) => {
        if (element === task) {
          missions.push({ value: getTaskId(dealer, task), label: element });
          return true;
        }
        return false;
      });
    });
  });
  return missions;
}

function getTaskId(dealerName: string, taskName: string) {
  return taskData[dealerName]?.[taskName]?.["id"];
}

function getTaskUrl(dealerName: string, taskName: string) {
  return taskData[dealerName]?.[taskName]?.["wiki_url"];
}

interface CheckboxProps {
  missions: MissionOption[];
  selected: string[];
  setSelectedMissions: (value: MissionOption[]) => void;
  dealer?: string;
}

function Checkbox({
  missions,
  selected,
  setSelectedMissions,
  dealer,
}: CheckboxProps) {
  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) {
      const label = e.currentTarget.querySelector("span");
      if (!label || !dealer) {
        return;
      }
      window.open(getTaskUrl(dealer, label.innerText), "_blank");
      return false;
    }
  };

  const handleCheckboxChange = (mission: MissionOption) => {
    if (selected.includes(mission.label)) {
      setSelectedMissions(
        array2dict(selected.filter((m) => m !== mission.label)),
      );
    } else {
      setSelectedMissions(array2dict([...selected, mission.label]));
    }
  };

  return (
    <div className="grid grid-cols-1 gap-1.5 py-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {missions.map((mission) => {
        const isChecked = selected.includes(mission.label);

        return (
          <label
            key={mission.value}
            htmlFor={`checkbox-${mission.value}`}
            onClick={handleClick}
            className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 transition-all duration-200 hover:translate-x-0.5 ${
              isChecked
                ? "border-green-500/30 bg-green-500/10"
                : "border-border bg-transparent hover:border-white/15 hover:bg-white/[0.03]"
            }`}
          >
            {/* Custom Checkbox */}
            <div className="relative h-4 w-4 flex-shrink-0">
              <input
                type="checkbox"
                id={`checkbox-${mission.value}`}
                checked={isChecked}
                onChange={() => handleCheckboxChange(mission)}
                className="absolute h-full w-full cursor-pointer opacity-0"
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded border-2 transition-all duration-200 ${
                  isChecked
                    ? "border-green-500 bg-green-500"
                    : "border-white/20 bg-transparent"
                }`}
              >
                {isChecked && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Label */}
            <span
              className={`text-xs leading-tight transition-colors duration-200 ${
                isChecked
                  ? "font-semibold text-green-500"
                  : "font-normal text-text-secondary"
              }`}
            >
              {mission.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default Checkbox;
