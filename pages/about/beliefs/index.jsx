import HeroTextOnly from "@/components/Hero/HeroTextOnly";
import styles from '../about.module.scss';
import AboutInfoItem from "../../../components/AboutInfoItem/AboutInfoItem";


function Beliefs() {
    return (
        <>
          <HeroTextOnly
            title='Our Beliefs'
            subtitle='Discover Da Vinci Institute'
          />
          <div className={styles.container}>
            <section className={styles.infoSection}>
              <AboutInfoItem title='Our Beliefs'>
                <div className='px-12 text-left text-3xl'>
                  <ol>
                    <li className='my-6'>
                      Education is the most reliable investment for mankind’s
                      quest for progress and success.
                    </li>
                    <li className='text my-6'>
                      Knowledge is the greatest form of currency for the
                      individual.
                    </li>
                    <li className='text my-6'>
                      Each individual is born with an inherent gift; the
                      purpose of education is to identify this gift and to
                      help the individual cultivate it to their maximum
                      potential.
                    </li>
                    <li className='text my-6'>
                      Every individual should have the right to education and
                      equal chance at success; there shall be neither
                      divisions nor discriminations regarding access to
                      resources.
                    </li>
                    <li className='text my-6'>
                      The individual has a responsibility to use their
                      abilities for the general advancement of mankind.
                    </li>
                  </ol>
                </div>
              </AboutInfoItem>
              
            </section>
          </div>
        </>
      );
}

export default Beliefs;