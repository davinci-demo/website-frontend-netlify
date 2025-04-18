import FeatureSection from '@/components/FeatureSection/FeatureSection';
import HeroMain from '@/components/Hero/HeroMain';
import Quote from '@/components/Quote/Quote';
import SectionHeader from '@/components/SectionHeader/SectionHeader';

export default function Home() {
  return (
    <div className='w-screen bg-black'>
      <HeroMain />
      <div className='my-10 mb-32 flex flex-col items-center justify-center gap-y-12 md:mx-8 lg:mx-16'>
        <SectionHeader
          title='Tens of Millions of Students Worldwide Lack Access to Adequate Education'
          subtitle='Da Vinci Institute aims to address this situation by offering affordable personalized education to students in need around the world.'
        />
        <div id='features'>
          <FeatureSection
            id='students'
            headerLines={[
              'Of The Students',
              'By The Students',
              'For The Students',
            ]}
            bodyParagraphs={[
              `Da Vinci Institute's curricula are developed solely by tutors who
            have a deep understanding of students' needs. The lack of
            adherence to any common standard allows the lessons to be flexible
            and personalized for each student, helping the students to reach a
            level of understanding other institutions cannot provide with
            their traditional teaching methods`,
            ]}
            imagePath='/images/info/students.jpg'
            imageAltText='Photo of students in graduate regalia throwing their mortarboards in the air'
          />
          <FeatureSection
            id='education-for-all'
            headerLines={['Education For All']}
            bodyParagraphs={[
              `We firmly uphold the idea that education should be accessible to
            all. Thus, our class fees are strictly minimized and we offer fee
            waivers to students who cannot afford the classes. All revenue
            apart from the maintenance fee is used to directly contribute to
            our mission, either being donated to other educational charities,
            or added to the funds for the scholarship that we offer to our
            students.`,
            ]}
            imagePath='/images/info/education.jpg'
            imageAltText='Photo of 3 college students smiling and laughing while sitting at a table with notebooks and laptops open'
            textOnRight={true}
          />
          <FeatureSection
            id='unlimited-learning'
            headerLines={['Unlimited Learning']}
            bodyParagraphs={[
              `Da Vinci Institute believes that all knowledge, regardless of
            subject, is valuable. The Institute aspires to provide all
            students with the support they need to develop and succeed as
            learners in all subjects. To achieve this, Da Vinci Institute
            provides courses in a wide variety of subjects for students in all
            levels of proficiency, and places great importance in expanding
            its curricula.`,
            ]}
            imagePath='/images/info/library.jpg'
            imageAltText='Photo of a large, circular library room three stories tall, with bookshelves built into the walls'
          />
        </div>
        <Quote
          quote='The Noblest Pleasure Is The Joy Of Understanding'
          author='Leonardo Da Vinci'
        />
      </div>
    </div>
  );
}
