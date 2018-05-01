import React from 'react';
import ReactDom from 'react-dom';

import './css/main.css';

import FriendsContainer from './js/FriendsContainer';

// import './js/YDKJS1'; import './js/YDKJS2-1';
// import './js/YDKJS2-2';

function App() {
  return (
    <div className="grey-bg">
      <FriendsContainer className="align-center" />
      <div className="outer">
        <div className="inner" />
      </div>
    </div>
  );
}

ReactDom.render(App(), document.getElementById('root'));
