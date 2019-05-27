import React from 'react';

const Nav = ({title}) => (
  <nav className="navbar navbar-dark bg-dark d-flex">
    <a className="navbar-brand ml-5" href="/">{title || "Posteos"}</a>
  </nav>
)
  
export default Nav;