import React from "react";
import styles from "./styles.module.css";

interface ComponentListElementProps {
  onClick: () => void;
  label: string;
  isSelected: boolean;
}

const ComponentListElement: React.FC<ComponentListElementProps> = ({
  label,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={[
        styles.componentListElement,
        isSelected && styles.selected,
      ].join(" ")}
    >
      {label}
    </div>
  );
};

export default ComponentListElement;
