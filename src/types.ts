export type SelectOption = {
  value: string | number;
  label: string;
};

export type TaskReference = {
  name: string;
  url?: string;
  num: number | string;
};

export type ItemCardTask = TaskReference;

export type ItemCardProps = {
  itemName: string;
  img: string;
  tasks: ItemCardTask[];
  num: string | number;
  inRaid?: "inRaid" | "nonRaid";
  category?: string;
};

export type ItemOffCanvasProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  num?: string | number;
  tasks: ItemCardTask[];
  img: string;
  inRaid: string;
};

export type ToggleHandler = (value: boolean) => void;

export type SettingBarProps = {
  setShowSetting: (value: boolean) => void;
};

export type HideoutLevelProps = {
  hideoutName: string;
  max: number;
};

export type DealerOption = SelectOption & {
  value: string;
  label: string;
};

export type TableRow = Record<string, string | number>;

export type MissionOption = {
  value: number;
  label: string;
};

export type TaskItem = {
  full_name: string;
  name: string;
  num: number;
  inRaid: boolean;
  img: string;
  category: string;
};

export type TaskEntry = {
  id: number;
  wiki_url: string;
  items?: Record<string, TaskItem>;
};

export type TaskData = Record<string, Record<string, TaskEntry>>;

export type HideoutItem = {
  full_name: string;
  name: string;
  num: number;
  img: string;
};

export type HideoutLevelEntry = {
  items: Record<string, HideoutItem>;
};

export type HideoutData = Record<string, Record<string, HideoutLevelEntry>>;
