import React from 'react';
import LineExample from './components/lineChart';

  import Nav from './components/nav';

  export default class App extends React.Component {
    render() {    
      return (
        <div className="App">
          
            <div>
              <Nav />
              <LineExample />
            </div>
        </div>
      );
    }
  }
