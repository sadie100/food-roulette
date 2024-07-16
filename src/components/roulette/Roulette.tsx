import styles from "./roulette.module.css";

const Roulette = () => {
  return (
    <div className={styles["compsoul-body"]}>
      <div className={styles["compsoul-roulette"]}>
        <div className={styles["roulette-marker"]}></div>
      </div>
    </div>
  );
};

export default Roulette;
