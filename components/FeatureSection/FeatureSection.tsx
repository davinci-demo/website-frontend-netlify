import Image from 'next/image';
import { classNames } from '@/lib/utils';

interface FeatureSectionProps {
  id: string;
  headerLines: string[];
  bodyParagraphs: string[];
  imagePath: string;
  imageAltText: string;
  textOnRight?: boolean;
}

const FeatureSection = (props: FeatureSectionProps) => {
  const id = `feature-${props.id}`;

  const textDiv = (
    <div className='flex flex-col space-y-6 sm:basis-1/2'>
      <div className='text-center font-julius text-3xl'>
        {props.headerLines.map((headerLine, i) => {
          return <h3 key={`${id}-h-${i}`}>{headerLine}</h3>;
        })}
      </div>
      <div className='text-center font-vietnam text-lg'>
        {props.bodyParagraphs.map((bodyParagraph, i) => {
          return <p key={`${id}-p-${i}`}>{bodyParagraph}</p>;
        })}
      </div>
    </div>
  );
  const imageDiv = (
    <div className='mx-2 mb-6 flex justify-center overflow-hidden rounded-2xl bg-neutral-700 sm:mb-0 sm:basis-1/2'>
      <Image
        src={props.imagePath}
        alt={props.imageAltText}
        width={1000}
        height={800}
        className='object-cover'
      />
    </div>
  );

  return (
    <div
      id={id}
      className={classNames(
        'my-12 flex min-w-[300px] max-w-6xl rounded-3xl border border-neutral-600 px-4 py-6 text-white sm:mx-4 sm:flex-row sm:space-x-6',
        props.textOnRight ? 'flex-col' : 'flex-col-reverse'
      )}
    >
      {props.textOnRight ? (
        <>
          {imageDiv}
          {textDiv}
        </>
      ) : (
        <>
          {textDiv}
          {imageDiv}
        </>
      )}
    </div>
  );
};

export default FeatureSection;
