import Marker from "./Marker";
import styles from "./roulette.module.css";
import { useState } from "react";

const Roulette = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Animation duration
  };
  return (
    <div className={styles["compsoul-roulette"]}>
      <Marker isAnimating={isAnimating} startAnimation={startAnimation} />
    </div>
  );
};

export default Roulette;
