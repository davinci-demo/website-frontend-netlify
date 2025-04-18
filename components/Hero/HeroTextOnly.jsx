import styles from './hero.module.scss';

function HeroTextOnly({ title, subtitle }) {
  return (
    <div className={styles.heroSection}>
      <div className='flex flex-col items-center justify-center'>
        <div className={styles.heroTitle}>{title}</div>
        <div className={styles.heroSubTitle}>{subtitle ? subtitle : ''}</div>
      </div>
    </div>
  );
}

export default HeroTextOnly;
