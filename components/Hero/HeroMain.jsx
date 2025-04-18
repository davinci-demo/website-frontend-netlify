import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import styles from "./hero.module.scss"

const HeroMain = () => {
  const ofWordsArr = ['arts', 'sciences', 'humanities'];
  const rotatingWordsRef = useRef(null);
  const videoRef = useRef(null);
  const bgColorGradientsRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  ///////////////////////////////////////////
  ///////////////////////////////////////////
  ///////////////////////////////////////////

  useEffect(() => {
    const gsapTimeline = gsap.timeline();
    gsapTimeline.set(rotatingWordsRef.current, { yPercent: 100, opacity: 0 });
    gsapTimeline
      .to(rotatingWordsRef.current, {
        yPercent: 0,
        opacity: 1,
        ease: 'power2.in',
        duration: 1.25,
      })
      .to(
        rotatingWordsRef.current,
        {
          yPercent: -50,
          opacity: 0,
          ease: 'power1.in',
          duration: 1,
          onComplete: () => {
            setCurrentWordIndex((currentWordIndex + 1) % ofWordsArr.length);
          },
        },
        '>1.25'
      );
  }, [currentWordIndex, ofWordsArr.length]);

  useEffect(() => {
    videoRef.current.playbackRate = .35;
  },[]);

  useEffect(() => {
    const bgGrads = bgColorGradientsRef.current;
    console.log(bgGrads)
    
  }, []);

  return (
    <div className='relative flex flex-col items-center justify-center overflow-visible text-2xl sm:h-[400px] lg:h-[800px] '>
      <div  id="bg-color-gradientRight" className={styles.radGradRight}></div>
      <div  id="bg-color-gradientLeft" className={styles.radGradLeft}></div>
      {/* <div ref={bgColorGradientsRef} id="bg-color-solid" className='absolute top-0 left-0 w-full h-full bg-yellow-600'></div> */}
      <video id="bg-vid" ref={videoRef} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover mix-blend-multiply">
        <source src="./video/smoke.mp4" type="video/mp4" />
      </video>
      {/* <div id="color-spotlight" className='absolute h-1/2 w-2/6 animate-chromaSpotPulse rounded-full  opacity-80 blur-3xl sm:opacity-70 md:opacity-60 lg:opacity-50'></div> */}

      <h1 id="the-text" className='z-10 relative lg:bottom-24 flex  h-64 w-2/3 flex-col items-center justify-center font-julius xs:w-full sm:h-56 sm:w-5/6 lg:h-80 lg:w-4/5 select-none'>
        <div className='flex h-16 items-center text-white xs:h-12 xs:text-[32px] sm:text-[52px] lg:h-28 lg:text-[80px] xl:h-36 xl:text-[100px] 2xl:text-[125px] 3xl:text-[150px]'>
          Da Vinci Institute
        </div>
        <div className='relative flex h-12 items-center justify-center overflow-hidden bg-none text-white xs:-top-1 xs:left-2 xs:h-10 xs:w-[200px] xs:text-[20px] sm:top-2 sm:w-[290px] sm:text-[35px] md:left-0 lg:left-0 lg:h-16 lg:w-[380px] lg:text-[45px] xl:h-20 xl:w-[450px] xl:text-[55px] 2xl:h-24 2xl:w-[575px] 2xl:text-[70px] 3xl:left-10 3xl:top-4 3xl:w-[600px] 3xl:text-[75px]'>
          <div className='absolute left-4 flex h-full items-center justify-center 3xl:left-0 3xl:w-1/5'>
            of
          </div>
          <div
            ref={rotatingWordsRef}
            className='flex h-full items-center justify-start overflow-hidden xs:absolute xs:left-11 xs:px-2 xs:pb-0 sm:left-16 sm:pb-1 sm:pl-4 lg:left-20 lg:pb-1 xl:left-24 xl:pb-2 xl:pl-5 2xl:left-28 2xl:pl-7 3xl:pb-2'
          >
            {ofWordsArr[currentWordIndex]}
          </div>
        </div>
      </h1>
    </div>
  );
};

export default HeroMain;
