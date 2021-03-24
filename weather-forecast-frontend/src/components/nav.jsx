import React from 'react';

  export default class Nav extends React.Component {
    render() {    
      return (
        <div>
           <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="  "></img>
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <h2 class="text-primary text-center"> NavBar  </h2>
                    </li>
                </ul>
            </nav>
        </div>
      );
    }
  }