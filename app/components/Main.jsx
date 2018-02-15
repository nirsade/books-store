var React = require('react');
import { BooksTable } from './BooksTable'

export const Main = (props) => {
  return (
    <div>
      <div className='mainHeader'>
        <h1>
          Books Store
        </h1>
      </div>
      <BooksTable/>
    </div>
  );
}