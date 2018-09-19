import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// Domain restricted
const API_KEY = 'AIzaSyBsiX-Crq1m-qpFTLtnmlp1-J98yT8XP1w';

// Create a new component -> should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
