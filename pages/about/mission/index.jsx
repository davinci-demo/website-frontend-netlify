import HeroTextOnly from "@/components/Hero/HeroTextOnly";
import styles from '../about.module.scss';
import AboutInfoItem from "../../../components/AboutInfoItem/AboutInfoItem";


function Mission() {
    return (
        <>
          <HeroTextOnly title="Our Mission" subtitle="Discover Da Vinci Institute" />
          <div className={styles.container}>
            <section className={styles.infoSection}>
              <AboutInfoItem title="Our Mission">
                <p className="text-center">
                  Da Vinci Institute seeks to provide personalized education to students all around the world who have different learning methods and needs that are not satisfied by public education system. We strive to recognize the potential in each student and help them cultivate their talents to make a lasting positive impact on society.
                </p>
              </AboutInfoItem>
            </section>
          </div>
        </>
      );
}

export default Mission;