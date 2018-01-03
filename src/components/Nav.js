import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <Link to="/game/misc"><li>Play</li></Link>
      <Link to="/word-set/misc"><li>Wordsets</li></Link>
      <Link to="/login"><li>Login</li></Link>
      <Link to="/register"><li>Register</li></Link>
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(Nav);