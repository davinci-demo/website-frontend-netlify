import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import HeroTextOnly from '../../../components/Hero/HeroTextOnly';
////import { Lesson, Course, Enrollment } from '../../../models/course';
import { Lesson } from '../../../models/course';
import styles from './library.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CourseModal from '../../../components/CourseModal/CourseModal';

import { createClient, type NormalizeOAS, type OASOutput } from 'fets';
import type openapi from '../../../openapi';
type Course = OASOutput<NormalizeOAS<typeof openapi>, '/api/courses/{courseId}', 'get'>;
////const p = console.log;
const disclaimerNotice =
  'Please note that the Institute is in its beginning stages, and thus still developing its curriculum. Due to the lack of tutors, we are unable to provide as many courses as of now, but we plan to rapidly expand our curriculum as we gain more volunteers.';

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

const CourseLibrary: NextPage = () => {
  const [courseModalIsOpen, setCourseModalIsOpen] = useState(false);
  const [courseInfo, setCourseInfo] = useState({});
  const [headersList, setHeadersList] = useState([]);
  const [courses, setCourses] = useState<Course['course'][]>([]);

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
    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: process.env.DEMO_BACKEND_URL
    });
    const fetchCourses = async () => {
      const response = await client['/api/courses'].get()
      if (!response.ok) throw new Error('Failed to fetch courses.');
      return response.json();
    };
    fetchCourses()
      .then(res => {
        if (res.result) {
          setCourses(res.result);
        }
      })
      .catch(console.error());
  }, []);

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

};
export default CourseLibrary;

