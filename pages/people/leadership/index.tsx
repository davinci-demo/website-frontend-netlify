import { useRouter } from "next/router";
import { useEffect } from "react";
import SecondaryLayout from "@/components/SecondaryLayout";
import Image from 'next/image';
import HeroTextOnly from "@/components/Hero/HeroTextOnly";
import styles from './leadership.module.scss';

import img1 from '@/public/images/leadership/notAvailable.png';
import img2 from '@/public/images/leadership/elvinliu.jpg';
import img3 from '@/public/images/leadership/jamesNgai.jpg';
import img4 from '@/public/images/leadership/siddharthbaasri.jpg';
import img5 from '@/public/images/leadership/thimothyTan.jpg';


function Page() {

    
    return (<>
        
        <HeroTextOnly title={"Da Vinci Leadership"} subtitle={"Where our ideas begin"}/>
        <section className={styles.infoSection}>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <article className={styles.card}>
                        <Image
                            src={img1.src}
                            alt={'students'}
                            width={500}
                            height={300}
                        />
                    </article>
                    <article className={styles.card}>
                        <h3 className={styles.name}>
                            Alexander Lee
                        </h3>
                        <h4 className={styles.title}>
                            Chief Executive Officer | Chairman
                        </h4>
                        <p className={styles.text}>
                            Alexander, a freshman at the University of Washington, is deeply devoted to the pursuit of knowledge. He has enjoyed learning from a young age and has been a regular participant and a high scorer in numerous academic competitions throughout multiple subjects. He especially has a strong passion for Mathematics, Astrophysics, and Latin, and is currently studying Multivariable/Vector Calculus, Fundamental Particles, Latin Literature, and Spoken Latin. Alex is experienced in tutoring students in multiple subjects, through which he hopes to introduce others to the joy of learning and understanding. Aside from his quest to seek knowledge, Alex enjoys building computers and working on various engineering projects.
                        </p>
                    </article>
                    <article className={styles.card}>
                        <h3 className={styles.name}>
                            James Ngai
                        </h3>
                        <h4 className={styles.title}>
                            Chief Operating Officer | Vice Chairman
                        </h4>
                        <p className={styles.text}>
                            James is a senior at Issaquah High School and has a passion for Mathematics and Computer Science, and is currently studying Multivariable Calculus, Linear Algebra, and Computer Algorithms. He has extensive experience in tutoring students in many subjects such as Math, English, Coding, and Chemistry. Outside of his time as a student, James is involved with DECA and participates in business competitions.
                        </p>
                    </article>
                    <article className={styles.card}>
                        <Image
                            src={img3.src}
                            alt={'education'}
                            width={500}
                            height={300}
                        />
                    </article>
                    <article className={styles.card}>
                        <Image
                            src={img5.src}
                            alt={'education'}
                            width={500}
                            height={300}
                        />
                    </article>

                    <article className={styles.card}>
                        <h3 className={styles.name}>
                            Timothy Tan
                        </h3>
                        <h4 className={styles.title}>
                            Chief Financial Officer
                        </h4>
                        <p className={styles.text}>
                            Timothy is a junior at Issaquah High School this year. His favorite subject is math; he has previously studied calculus and is currently studying statistics in school. He also enjoys reading, especially the genre of fiction and fantasy. Outside of school, he is passionate about studying classical music, playing the piano and the violin. He has participated in local youth orchestras and local competitions. Some of his hobbies include playing badminton and chess.
                        </p>
                    </article>
                    <article className={styles.card}>
                        <h3 className={styles.name}>
                            Cosun Zhou
                        </h3>
                        <h4 className={styles.title}>
                            Chief Publicity Officer
                        </h4>
                        <p className={styles.text}>
                            Cosun, a senior at Issaquah High School, possesses an unshakable yearning for intellectual fulfillment. His unwavering dedication to academics has led him to earning top marks in 10+ AP classes, ranging from Calculus to English. In particular, he has an intrinsic predilection for the fields of Mathematics and Writing, and plans on furthering his skills in both fields in higher education. Aside from academics, Cosun is a leading executive producer of the school’s TV/Video production that showcases student-made stories each week. In his free time, Cosun immerses himself in exploring new techniques in the art of filming and watching sports.
                        </p>
                    </article>
                    <article className={styles.card}>
                        <Image
                            src={img1.src}
                            alt={'education'}
                            width={500}
                            height={300}
                        />
                    </article>
                    <article className={styles.card}>
                        <Image
                            src={img1.src}
                            alt={'education'}
                            width={500}
                            height={300}
                        />
                    </article>
                    <article className={styles.card}>
                        <h3 className={styles.name}>
                            Zachary Priestley
                        </h3>
                        <h4 className={styles.title}>
                            Secretary
                        </h4>
                        <p className={styles.text}>
                            Zach, a senior at Issaquah High School, is an aspiring creator who studies digital art and animation. In addition to drawing, Zach has strong interests in entrepreneurship and publishing. HIs favorite part of activities is not the act itself, but showing and inspiring others to follow their own visions.
                        </p>
                    </article>
                    <article className={styles.card}>
                        <h3 className={styles.name}>
                            Elvin Liu
                        </h3>
                        <h4 className={styles.title}>
                            Director of Mathematics
                        </h4>
                        <p className={styles.text}>
                            Elvin is a senior at IHS who has a passion for mathematics. Pursuing his interests, he has studied Calculus in the recent years and is currently studying Statistics in depth. Elvin has had various experiences volunteering for his local community, including tutoring students in various subjects for mathematics. In his free time, Elvin enjoys playing Clash Royale and sleeping.
                        </p>
                    </article>
                    <article className={styles.card}>
                        <Image
                            src={img2.src}
                            alt={'education'}
                            width={500}
                            height={300}
                        />
                    </article>
                    <article className={styles.card}>
                        <Image
                            src={img4.src}
                            alt={'education'}
                            width={500}
                            height={300}
                        />
                    </article>
                    <article className={styles.card}>
                        <h3 className={styles.name}>
                            Siddharth Baasri
                        </h3>
                        <h4 className={styles.title}>
                            Director of Physics
                        </h4>
                        <p className={styles.text}>
                            Siddharth is a sophomore at Issaquah High school. He had a strong passion for Math and Physics and has been tutoring middle and high school students. He loves solving complex problems from various math and physics competitions from around the world. He enjoys teaching and has created videos on multiple topics explaining concepts. He is an avid piano and violin player, participating in numerous competitions and teaches intermediate piano students.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    </>);
}

Page.getLayout = function getLayout(page: React.ReactNode) {
    return <SecondaryLayout>{page}</SecondaryLayout>;
};

export default Page;
