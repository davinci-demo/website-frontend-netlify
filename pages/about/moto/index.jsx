import HeroTextOnly from "@/components/Hero/HeroTextOnly";
import styles from '../about.module.scss';
import AboutInfoItem from "../../../components/AboutInfoItem/AboutInfoItem";


function Moto() {
    return (
        <>
          <HeroTextOnly
            title='Our Moto'
            subtitle='Discover Da Vinci Institute'
          />
          <div className={styles.container}>
            <section className={styles.infoSection}>
            <AboutInfoItem title='Our Moto'>
                  <p className='text-center'>
                    Light, Justice, and Truth; Knowledge, Wisdom, and
                    Experience; Mind, Hand, and Soul
                    <br /> 
                    Lux, Iustitia, et Veritas;
                    Scientia, Sapientia, et Peritia; Mens, Manus, et Anima <br />Φῶς,
                    Δικαιοσύνη, καὶ Αλήθεια; Eπιστήμη, Σοφία, καὶ Eμπειρίᾱ;
                    Νοῦς, Χείρ, καὶ Ψυχή אור, צדק, ואמת; דעת, חכמה, ניסיון; לב,
                    יד, ונפש
                    <br />
                    {/* אור, צדק, ואמת; דעת, חכמה, ניסיון; לב, יד, ונפש */}

                    Explanation.......
                  </p>
                </AboutInfoItem>
            </section>
          </div>
    </>);
}

export default Moto;