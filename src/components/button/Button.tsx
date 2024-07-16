import { ReactNode } from "react";
import styles from "./button.module.css";

const Button = ({ children }: { children: ReactNode }) => {
  return <button className={styles["big-button"]}>{children}</button>;
};

export default Button;
