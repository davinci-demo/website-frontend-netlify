import styles from "./donateButton.module.scss";

export default function DonateButton(props) {
    return (
      <button {...props} className={styles.donateButton}>Donate</button>
    );
  }