import { useRouter } from 'next/router';

//** this page probably won't be necessary unless **//
//** an explaination of what the subjects are **//

function SubjectPage() {
  const router = useRouter();
  const { subject } = router.query;

  return (
    <div>
      <div className='text-primary-1 text-4xl '>Subject: {subject}</div>
      
    </div>
  );
}

export default SubjectPage;