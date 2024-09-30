import React from "react";
import styles from "./styles.module.css";

interface ThemeToggleButtonProps {
  onClick?: () => void;
  theme: "light" | "dark";
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  onClick,
  theme,
}) => {
  return (
    <div role="button">
      <input
        onClick={onClick}
        className={styles.themeToggle}
        type="checkbox"
        id="theme-toggle"
        hidden
        checked={theme === "dark"}
      />
      <label htmlFor={"theme-toggle"}></label>
    </div>
  );
};

export default ThemeToggleButton;
