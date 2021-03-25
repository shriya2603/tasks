import React ,{Component}from 'react';
import LineChart from './components/lineChart';
import Nav from './components/nav';
import SideBar from './components/sidebar';
class App extends Component {
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
export default App;