import { use, useEffect, useRef, useState } from 'react';
import styles from './navbar.module.scss';
import NavDropdown from './NavDropdown';
import DonateButton from '../DonateButton/DonateButton';
import SearchBar from './SearchBar';
import logo from '../../public/images/logo.png';
import ProfileDropdown from './ProfileDropdown';
import { NAV_ITEMS_LEFT, NAV_ITEMS_RIGHT } from './navbarItems';
import AppMenu from './AppMenu';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const primaryColor = 'rgb(255, 217, 90)';

const Navbar = () => {
  const navbarRef = useRef(null);
  // previousUser true if localStorage key exists
  const [previousUser, setPreviousUser] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);
  const [windowSize, setWindowSize] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: false });

      gsap.from('[id^=menuitem-]', {
        y: -100,
        stagger: {
          from: 'start',
          ease: 'linear',
          amount: 0.45,
        },
      });

      
    },
    { scope: navbarRef }
  );

  // function removeLocalStorageUserKey(){
  //   localStorage.removeItem("user");
  // }

  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  useEffect(() => {
    //run just once to create a new key
    //localStorage.setItem("user","username");
    // if (localStorage.getItem("user")) {
    //   setPreviousUser(true);
    // } else {
    //   setPreviousUser(false);
    // }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--screenWidth', windowSize);
  }, [windowSize]);

  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////

  return (
    <>
      <div>
        <nav ref={navbarRef} className={styles.navbar}>
          <ul className={styles.navbarLeft}>
            {NAV_ITEMS_LEFT.map((item, index) => (
              <li id={`menuitem-l${index}`} key={`nav-button-${item.name}`} >
                <NavDropdown
                  active={item.active}
                  name={item.name}
                  url={item?.url}
                  menuItems={item.menuItems}
                />
              </li>
            ))}
          </ul>
          <div className={styles.navLogo}>
            <Link href='/'>
              <Image
                className={styles.logo}
                src={logo.src}
                alt='Da Vinci Institute logo'
                width={75}
                height={75}
              />
            </Link>
          </div>
          <ul className={styles.navbarRight}>
            {NAV_ITEMS_RIGHT.map((item, index) => (
              <li id={`menuitem-r${index}`} key={`nav-button-${item.name}`}>
                <NavDropdown
                  name={item.name}
                  url={item?.url}
                  menuItems={item.menuItems}
                />
              </li>
            ))}
          </ul>
          <AppMenu />
        </nav>

        {/*/////////////////////////////////////////////////////*/}
        {/*************** SECOND ROW W/SEARCH BAR ***************/}

        <div className={styles.underNav}>
          <div style={{ gridArea: 'donate' }} className=' flex items-center'>
            <DonateButton />
          </div>
          <div style={{ gridArea: 'searchbar'}} className=' flex items-center'>
            <SearchBar></SearchBar>
          </div>
          <div style={{ gridArea: 'profile' }} className=' flex items-center'>
            
            <div className={styles.imageProfileContainer}>
              {loggedIn ? (
                <>
                  <Image
                    className={styles.profileImage}
                    id='profileImage'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/270px-Da_Vinci_Vitruve_Luc_Viatour.jpg'
                    alt='profile pic'
                    width={200}
                    height={200}
                  />
                  <label id='viewProfile'>
                    <ProfileDropdown
                      key={`profile-button`}
                      name={`Profile`}
                      menuItems={[
                        { option: 'View Profile', url: '' },
                        { option: 'Account Settings', url: '' },
                        { option: 'Logout', url: '' },
                      ]}
                    ></ProfileDropdown>
                  </label>
                </>
              ) : (
                <button className={styles.signInButton}>
                  {previousUser ? 'Sign In' : 'Register'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
