import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//import { getServerSideProps } from 'next';
import HeroTextOnly from '../../../components/Hero/HeroTextOnly';
import { Lesson, Course, Enrollment } from '../../../models/course';
import styles from './library.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CourseModal from '../../../components/CourseModal/CourseModal';
// import { IoMdCloseCircleOutline } from 'react-icons/io';

const p = console.log;





const disclaimerNotice =
  'Please note that the Institute is in its beginning stages, and thus still developing its curriculum. Due to the lack of tutors, we are unable to provide as many courses as of now, but we plan to rapidly expand our curriculum as we gain more volunteers.';

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


//** THIS WILL BE USED IN PRODUCTION */
export async function getStaticProps() {
  try {
    console.log('Fetching courses...');
    // const res = await fetch('http://localhost:3000/api/courses/exampleCourses');
    ////const res = await fetch('http://localhost:3001/courses'); //<--db.json
    const resurl = process.env.DEMO_BACKEND_URL +'/courses';
    const res = await fetch(resurl); //<--db.json
    const data = await res.json();
    //console.log('Fetched data:', data);
    return {
      props: {
        courses: data,
      },
    };
  } catch (error) {
    console.error('Error fetching courses:', error);
    return {
      props: {
        courses: []
      },
    };
  }
}



function CourseLibrary({courses}) {
  const [courseModalIsOpen, setCourseModalIsOpen] = useState(false);
  const [courseInfo, setCourseInfo] = useState({});
  const [headersList, setHeadersList] = useState([]);
  const [data,setData]=useState(courses);

  function openModal(course) {
    setCourseModalIsOpen(true);
    setCourseInfo(course);    
  }

  function closeModal() {
    setCourseModalIsOpen(false);
    setCourseInfo({});
  }

  function handleLinkClick(course, e) {
    e.preventDefault();
    openModal(course);
  }

  
  
  
  ////////////////////////////////////////////////

  useEffect(() => {
    const body = document.body;
    const handleModalOpen = () => {
      if (courseModalIsOpen) {
        body.classList.add('overflow-hidden');
      } else {
        body.classList.remove('overflow-hidden');
      }
    };
    handleModalOpen();
    return () => body.classList.remove('overflow-hidden');
  }, [courseModalIsOpen]);

  useEffect(() => {
    console.log(`courseModalIsOpen: ${courseModalIsOpen}`)
  },[courseModalIsOpen]);

  useEffect(() => {
  },[]);

  useEffect(() => {
    const uniqueSubjects = new Set(courses?.map(course => course.subject));
    setHeadersList(Array.from(uniqueSubjects));
  }, [courses]);

  // Group courses by subject
  const coursesBySubject = courses?.reduce((acc, course) => {
    const subject = course.subject;
    acc[subject] = acc[subject] || [];
    acc[subject].push(course);
    return acc;
  }, {});

  //**THIS IS USED FOR DEVELOPMENT...db.json is temporarily serving data */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const res = await fetch('http://localhost:3001/api/courses/exampleCourses');
  //       const res = await fetch('http://localhost:3001/courses');
  //       const data = await res.json();
        
  //       setCourses(data);
  //     } catch (error) {
  //       console.error('Error fetching courses:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
 

  // useEffect(() => {
  //   console.log("data");
  //       console.log(data);
  // },[data]);
  ////////////////////////////////////////////////
  

  return (
    <>
      <HeroTextOnly
        title={'Course Library'}
        subtitle={'Our Full List of Current Offerings'}
      />

      <section className={styles.container}>
        <div className={styles.disclaimerSection}>
          <h3>DISCLAIMER</h3>
          <br />
          <div>{disclaimerNotice}</div>
        </div>
        <div className="border-4 px-6 flex flex-col items-center justify-center border-primaryMid rounded-xl">
          {headersList.map((subject) => (
            <div key={`subject-${subject}`} className={`${styles.subjectGroup} items-center`} >
              <div className={styles.subjectTitle}>{subject}</div>
              <div className={styles.courses}>
                {coursesBySubject[subject]?.map((course) => (
                  <div key={`course-${course.courseId}`} onClick={(e) => handleLinkClick(course, e)} className="">
                    <div id={`${course.title}`} className={styles.coursePreviewContainer}>
                      <Image className={styles.courseImage} src={course.image} width={700} height={300} alt={course.title} />
                      <div className={styles.courseInfo}>
                        <div className={styles.courseTitle}>{course.title}</div>
                        <div className={styles.courseDescription}>
                          {course.description.slice(0, 50) + '...'}
                        </div>
                        {/* <div className={styles.courseUpdated}>
                          Updated: {course.updated.toString().slice(4, 15)}
                        </div> */}
                        <div className={styles.courseLessons}>
                          Lessons({course.lessons.length})
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.coursePreviewContainer}></div> */}
      </section>
      {courseModalIsOpen && (
        <CourseModal
          closeModal={closeModal}
          courseInfo={courseInfo}
        />
      )}
    </>
  );

}


export default CourseLibrary;
//handleNavigation={handleNavigation}
