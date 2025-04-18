import { ReactNode, useState } from 'react';
import Head from 'next/head';
import { Cabin, Julius_Sans_One, Be_Vietnam_Pro } from 'next/font/google';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
  courseModal: React.ReactNode;
}

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
  weight: '400',
});
const julius = Julius_Sans_One({
  subsets: ['latin'],
  variable: '--font-julius',
  weight: '400',
})
const vietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: '--font-vietnam',
  weight: '400',
})

const RootLayout = ({ children,courseModal }: LayoutProps) => {

  return (<>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Da Vinci Institute</title>
    </Head>
    <div className={`n ${cabin.variable} ${julius.variable} ${vietnam.variable}`}>
      <Navbar />
      <main className='overflow-x-hidden'>
        {courseModal}  
        {children}
      </main>
      <Footer />
    </div>
  </>);
};

export default RootLayout;