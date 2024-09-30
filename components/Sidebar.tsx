"use client";

import { cn } from "@/utils";
import React, { useEffect, useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import styles from "./styles.module.css";

interface SidebarProps {
  className: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <aside
      className={cn("h-full w-full flex flex-col", styles.sidebar, className)}
    >
      <div className="flex-1"></div>
      <div className="flex justify-end flex-shrink-0 p-4">
        <ThemeToggleButton theme={theme} onClick={toggleTheme} />
      </div>
    </aside>
  );
};

export default Sidebar;
