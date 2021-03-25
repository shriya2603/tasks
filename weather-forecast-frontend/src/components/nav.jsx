import React , {Component} from 'react';
class Nav extends Component {
  render() {    
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark fixed-top">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Logo </a>
          <ul class="navbar-nav px-3 center">
            <li class="nav-item text-nowrap">
              <center><h3 class="text-white text-center">VivSoft</h3></center>
            </li>
          </ul>
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="/">Sign out</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;