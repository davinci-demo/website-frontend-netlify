import HeroTextOnly from "@/components/Hero/HeroTextOnly";
import styles from '../about.module.scss';
import AboutInfoItem from "../../../components/AboutInfoItem/AboutInfoItem";


function History() {
    return (
        <>
          <HeroTextOnly title="Our History" subtitle="Discover Da Vinci Institute" />
          <div className={styles.container}>
            <section className={styles.infoSection}>
              <AboutInfoItem title="Our History">
                <p className="text-center">
                  [Insert history content here.]
                </p>
              </AboutInfoItem>
            </section>
          </div>
        </>
      );
}

export default History;