import { useState, useRef, useEffect } from 'react';
import styles from './navbar.module.scss';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const toggleSearch = () => {
    setIsOpen(true);
    setIsOverlay(true);
  };

  const closeSearch = (event: MouseEvent) => {
    if (
      menuRef.current &&
      resultsRef.current &&
      !menuRef.current.contains(event?.target as Node) &&
      !resultsRef.current?.contains(event?.target as Node)
    ) {
      setIsOpen(false);
      setIsOverlay(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeSearch);
    return () => {
      document.removeEventListener('click', closeSearch);
    };
  }, []);

  return (
    <div className={styles.searchClasses}>
      {isOverlay && <div className={styles.overlay}></div>}
      <div
        className={styles.searchInputContainer}
        ref={menuRef}
        onClick={toggleSearch}
      >
        <input
          type='text'
          id='searchBar'
          className={styles.searchBar}
          placeholder='Search classes...'
        ></input>
        <button type='submit' id='submitButton' className={styles.submitButton}>
          {' '}
          search{' '}
        </button>
      </div>
      <div className={styles.searchDropdown}>
        {isOpen && (
          <div
            ref={resultsRef}
            className={`${styles.searchResults} ${styles.open}`}
          >
            No results found!
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
