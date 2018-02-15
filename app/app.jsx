import * as React from 'react';
import ReactDOM from 'react-dom';
import { Route , Router , hashHistory } from 'react-router';
import { BookDetails } from './components/BookDetails';
import Main from 'Main';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
    <Route path="/book" component={BookDetails}/>
  </Router>,
  document.getElementById('app')
);
