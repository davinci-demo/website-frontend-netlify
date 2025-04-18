import { ReactNode, useState } from 'react';
import { Cabin,Julius_Sans_One,Be_Vietnam_Pro } from 'next/font/google';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
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

const SecondaryLayout = ({ children }: LayoutProps) => {

  return (
    <div className={`${cabin.variable} ${julius.variable} ${vietnam.variable}`}>
      <Navbar />
      {/* *****Right now it's the same as the RootLayout**** */}
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default SecondaryLayout;
