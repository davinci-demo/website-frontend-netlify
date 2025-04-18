import styles from './subscribe.module.scss';

const Subscribe = () => {
  const onSubmitHandler = () => { };

  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>
            Envisioning a World of Scholars and Learners
          </h3>
          <h3 className={styles.title}>Sic Itur Ad Astra</h3>
        </div>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <div className='p-2'>
            <p className={styles.text}>
              Sign up for our newsletter to receive news and updates.
            </p>
            <div className={styles.subscription}>
              <div className={styles.wrapper}>
                <input
                  name='search'
                  type='text'
                  placeholder='Email Address'
                  className={styles.input}
                  autoComplete='off'
                />
              </div>
              <button className={styles.button}>Sign Up</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
