var React = require('react');
import { BooksTable } from './BooksTable'

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <div className='mainHeader'>
            <h1>
              Books Store
            </h1>
          </div>
          <BooksTable/>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
