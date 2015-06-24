require('./style.scss');

import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className='container' >
        <div className='red' ></div>
        <div className='blue'></div>
        <div className='green'></div>
        <div className='pink'></div>  
      </div> 
    );
  }
}

React.render(
  <App/>,
  document.body
);
