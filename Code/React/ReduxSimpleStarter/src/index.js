// Create a new component, that produces
// some HTML

import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  return <div > Hello! < /div>;
}

ReactDOM.render( <
  App / > , document.querySelector('.container'));