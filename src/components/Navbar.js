import React ,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar=()=>{
  const {books} =  useContext(BookContext);
  return(
      <div className="navbar">
          <h1>Reading list</h1>
          <p>Currently We have {books.length} books</p>

      </div>
  );
}

export default Navbar;