import Link from 'next/link';
import Image from 'next/image';
import styles from './courseModal.module.scss';
import libraryStyles from '../../pages/courses/library/library.module.scss';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useEffect } from 'react';

export default function CourseModal({ closeModal, courseInfo }) {
  function handleClose() {
    closeModal(false); // Set courseModalIsOpen to false
  }

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalShadow}></div>
        <div className={styles.contentRow}>
          <div className={styles.modalContainer}>
            <div className={styles.modalTitleRow}>
              {courseInfo.title && (
                <div style={{width: "93%",textAlign:"left"}} className={`${libraryStyles.subjectTitle} bg-slate-900`}>
                  {courseInfo.title}
                </div>
              )}
              <div className={styles.closeIcon} onClick={handleClose}>
                <IoMdCloseCircleOutline size='40' color='white' />
              </div>
            </div>
              <div className={styles.modalInfoRow}>
              {courseInfo.description && (
                <div className={styles.courseDescription}>
                  {courseInfo.description}
                </div>
              )}
              <div className={styles.lessonsTitle}>
                lessons ({courseInfo.lessons.length})
              </div>
            </div>
            <div className={styles.modalLessonsRow}>
              <div className={styles.lessonsMenu}>
                <div className='flex w-full  flex-wrap justify-start gap-4 p-4'>
                  {courseInfo.lessons.map((lesson, index) => (
                    <Link
                      key={index}
                      href={`/courses/library/${courseInfo.subject}/${courseInfo.courseId}/lessons/${courseInfo.lessons[index].lessonId}`}
                    >
                      <div className={styles.lessonButton}>{lesson.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className={styles.linkButton}>
                <Link
                  href={`/courses/library/${courseInfo.subject}/${courseInfo.courseId}`}
                >
                  <button>Go</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
