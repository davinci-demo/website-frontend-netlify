import HeroTextOnly from '../../../components/Hero/HeroTextOnly';
import styles from './tempregistration.module.scss';

function TempRegister() {
  return (
    <>
      <div className={styles.tempregistration}>
        <HeroTextOnly title={'Registration'} subtitle={'Da Vinci Tutoring '} />

        <div className='relative my-16 bottom-24 flex w-full justify-center '>
          <div className={styles.formIframe}>
            <iframe src="https://tally.so/r/3jLvE6" frameborder="0"></iframe>

          </div>
        </div>
      </div>
    </>
  );
}

export default TempRegister;
