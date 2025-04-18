import { useRouter } from 'next/router';

const LessonPage = () => {
  const router = useRouter();
  const { subject, courseId, lessonId } = router.query;

  // `lessonId` will be an array if it's provided or undefined if not
  console.log('Subject:', subject);
  console.log('Course ID:', courseId);
  console.log('Lesson ID:', lessonId);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-white m-4 '>Lesson page</div>
      <div>
      <div className='text-primary-1 text-5xl mb-4 '>Subject: {subject}</div>
      <div className='text-primary-1 text-4xl mb-4 '>Course ID: {courseId}</div>
      <div className='text-primaryMid text-4xl mb-4 '>Lesson ID: {lessonId ? lessonId.join('/') : 'No lesson ID'}</div>
      </div>
    </div>
  );
};

export default LessonPage;