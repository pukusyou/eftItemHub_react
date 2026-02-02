import Select, { type SingleValue, type StylesConfig } from "react-select";
import type { DealerOption } from "../types";

// Custom styles for react-select
const customStyles: StylesConfig<DealerOption, false> = {
  control: (provided, state) => ({
    ...provided,
    background: "var(--color-bg-tertiary, #1a1a25)",
    borderColor: state.isFocused
      ? "var(--color-accent-primary, #f59e0b)"
      : "var(--color-border, rgba(255, 255, 255, 0.08))",
    borderRadius: "8px",
    padding: "0.25rem",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(245, 158, 11, 0.15)" : "none",
    "&:hover": {
      borderColor: "var(--color-border-hover, rgba(255, 255, 255, 0.15))",
    },
    transition: "all 0.25s ease",
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? "var(--color-accent-primary, #f59e0b)"
      : state.isFocused
        ? "rgba(245, 158, 11, 0.1)"
        : "var(--color-bg-tertiary, #1a1a25)",
    color: state.isSelected ? "#000" : "#f8fafc",
    cursor: "pointer",
    padding: "0.75rem 1rem",
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 600,
    transition: "all 0.15s ease",
  }),
  menu: (provided) => ({
    ...provided,
    background: "var(--color-bg-secondary, #12121a)",
    border: "1px solid var(--color-border, rgba(255, 255, 255, 0.08))",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#f8fafc",
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 600,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--color-text-muted, #64748b)",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "var(--color-text-secondary, #94a3b8)",
    "&:hover": {
      color: "var(--color-accent-primary, #f59e0b)",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: (provided) => ({
    ...provided,
    color: "#f8fafc",
  }),
};

interface DealerSelecterProps {
  options?: DealerOption[];
  setSelectedValue?: (value: string) => void;
  setSelectedDealer?: (value: DealerOption) => void;
  value?: DealerOption;
}

const DealerSelecter = ({
  options = [],
  setSelectedValue,
  setSelectedDealer,
  value,
}: DealerSelecterProps) => {
  const handleChange = (selectedOption: SingleValue<DealerOption>) => {
    if (!selectedOption) {
      return;
    }
    if (setSelectedValue) {
      setSelectedValue(selectedOption.value);
    }
    if (setSelectedDealer) {
      setSelectedDealer(selectedOption);
    }
  };

  const defaultValue = value ?? (options.length > 0 ? options[0] : null);

  return (
    <Select
      defaultValue={defaultValue}
      value={value}
      options={options}
      onChange={handleChange}
      isSearchable={false}
      styles={customStyles}
    />
  );
};

export default DealerSelecter;
