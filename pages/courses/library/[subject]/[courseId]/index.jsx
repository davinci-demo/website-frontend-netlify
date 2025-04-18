import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
//import {exampleCourses} from '../../../../api/courses/exampleCoursesData';

function CoursePage({ courses }) {
  // const {} = props;
  const router = useRouter();
  const { subject, courseId } = router.query;
  const course = courses.find((course) => course.subject === subject);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-start text-white'>
      COURSE PAGE
      <div className='my-8 text-5xl text-primary-1 '>{subject}</div>
      {/* <div className='text-3xl text-primary-1 mb-8'>{mockCourse.title}</div> */}
      <div className='flex w-5/6 flex-wrap items-center justify-start  gap-4 rounded-xl border-4 border-primary-1 p-8'>
        {course.lessons.map((lesson, index) => (
            <div key={`lesson-${index}`} className='h-48 w-1/4 overflow-hidden rounded-xl border' >
              <Link href={`/courses/library/${course.subject}/${course.courseId}/lessons/${course.lessons[index].lessonId}`} >
                <div className='h-24 w-full bg-primaryMid'>image</div>
                <div className='p-2'>{lesson.title}</div>
                <div className='p-2'>{lesson.content}</div>
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export default CoursePage;

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

export async function getStaticProps() {
  try {
    // console.log('Fetching courses...');
    // const res = await fetch('http://localhost:3001/api/courses/exampleCourses');
    const res = await fetch('http://localhost:3001/courses'); //<--db.json
    const data = await res.json();
    //let data = exampleCourses;
    console.log(data);
    return {
      props: {
        courses: data,
      },
    };
  } catch (error) {
    console.error('Error fetching courses:', error);
    return {
      props: {
        courses: [],
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch('http://localhost:3001/courses'); //<--db.json
    const data = await res.json();

    // Extract subject and courseId for each course
    const paths = data.flatMap(course => {
      return course.lessons.map(lesson => ({
        params: {
          subject: course.subject,
          courseId: course.courseId,
          lessonId: lesson.lessonId || null
        },
      }));
    });

    

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error fetching courses:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}
