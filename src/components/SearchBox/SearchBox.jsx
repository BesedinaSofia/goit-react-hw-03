import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        className={styles.searchInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;
