import { useState, useRef, useEffect } from 'react';
import styles from './navDropdown.module.scss';

export interface ProfileDropdownProps {
  name: string;
  menuItems: Array<{
    option: string;
    url: string;
  }>;
}

const ProfileDropdown = ({ name, menuItems }: ProfileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={menuRef}>
      <button className={` sm:relative ${styles.searchNavButton} text-white`} onClick={toggleDropdown}>
        {name}
      </button>
      {isOpen && (
        <ul className={`${styles.dropdownMenu} ${styles.open}`}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.menuItems}>
              {item.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
