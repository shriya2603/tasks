import React from 'react';
import LineChart from './components/lineChart';

  import Nav from './components/nav';
import SideBar from './components/sidebar';

  export default class App extends React.Component {
    render() {    
      return (
        <div>
          <SideBar />
          <div className="main">
            <Nav />
            <LineChart />
          </div>
        </div>
      );
    }
  }
