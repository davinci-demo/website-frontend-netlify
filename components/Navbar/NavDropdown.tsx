import { useState, useRef, useEffect } from 'react';
import styles from './navDropdown.module.scss';
import Link from 'next/link';


export interface NavDropdownProps {
  name: string;
  active: boolean;
  url?:string;
  menuItems: Array<{
    active: boolean;
    option: string;
    url: string ;
  }>;
}

const NavDropdown = ({ name,url, menuItems,active }: NavDropdownProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [navbarWidth,setNavbarWidth] = useState("");
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
      setIsOpen(false);
    }
  };

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  /////////////////////////////////////////////////
  useEffect(() => {
    let nvbrdrpWidth = (window.innerWidth / 18) - 75 + 'px';
    setNavbarWidth(nvbrdrpWidth);
    document.documentElement.style.setProperty('--navbarWidth', nvbrdrpWidth);
  },[]);


  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  useEffect(() => {
    console.log("%cmenuItems:%o","color:orange;font-size:1.5rem", menuItems);
  }, [menuItems]);

  ////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  return (
    <div className={styles.dropdownContainer} ref={menuRef}>
      {/* ACTIVE BUTTON PROPOSAL vv...original...vv*/}
      {/* <button ref={buttonRef} className={styles.navButton} onClick={toggleDropdown}> */}
      <button ref={buttonRef} className={`${styles.navButton} ${active === false ? styles.inactiveNavButton : ''}`} onClick={toggleDropdown}>
        {menuItems.length > 0 ? name : (url && (<Link href={url}>{name }</Link>))}
      </button>
      {isOpen && (
        <ul className={`${styles.dropdownMenu} ${styles.open}`}>
          {menuItems && menuItems.map((item, index) => (
            // <li key={index} className={styles.menuItems}>
            <li key={index} className={`${styles.menuItems} ${item.active === false ? styles.inactiveMenuItems: ''}` }>
              <Link  href={item.url}>
                {item.option}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavDropdown;
