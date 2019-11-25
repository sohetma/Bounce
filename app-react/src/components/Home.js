import React from 'react';
import Ambassadors from './Ambassadors.js';
import { NavLink} from "react-router-dom";

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      smthg : ''
    }
  }

  render () {
    return (
      <div className="home">
        <button>
          <NavLink className="button" activeClassName="active" exact to="/ambassadors"> Add an ambassadors </NavLink>
        </button>
      </div>
    )
  }
}


export default Home;
