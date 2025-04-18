import styles from "../../pages/about/about.module.scss";
 function AboutInfoItem({ title, children }) {
    return (
      <div className={styles.infoItem}>
        <div className={styles.infoBody}>{children}</div>
      </div>
    );
  }
  export default AboutInfoItem;