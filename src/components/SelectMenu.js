import React from 'react';
import PropTypes from 'prop-types';


const SelectMenu = ({ shelf, book, updateShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={shelf} onChange={(e) => updateShelf(book, e.target.value, shelf)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

SelectMenu.propTypes = {
  shelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default SelectMenu;