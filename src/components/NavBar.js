import React, {Component} from 'react'

import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  state ={
    isOpen:false
  }

  handleToggle =() =>{
    this.setState({isOpen: !this.state.isOpen});
  }

  render(){
    return (
      <nav className="navbar">
        <div className="nav-center"></div>
        <div className="nav-header"></div>
        <Link to="/">
          <img src={logo} alt="Beach Resort"></img>
        </Link>
      </nav>
    )
  }
}

export default NavBar;