import styles from "./roulette.module.css";
import clsx from "clsx";
import MarkerSVG from "./Marker.svg?react";

const Marker = ({
  isAnimating,
  startAnimation,
}: {
  isAnimating: boolean;
  startAnimation: () => void;
}) => {
  return (
    <MarkerSVG
      className={clsx(styles["marker"], isAnimating && styles.animate)}
    />
  );
};

export default Marker;
