import styles from './description.module.scss';

const Description = () => {
  return (
    <section className={styles.description}>
      <div className={styles.container}>
        <h2 className={styles.title}>
        Tens of Millions of Students Worldwide Lack Access to Adequate Education
        </h2>
        <p className={styles.text}>
          Da Vinci Institute aims to address the situation by offering
          affordable personalized education to students in need around the
          world.
        </p>
      </div>
    </section>
  );
};

export default Description;
