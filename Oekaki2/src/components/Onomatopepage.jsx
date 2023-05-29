import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';


function Onomatope() {
  return (
    <>
    <li>
      <NavLink activeClassName="active" to="/main">
        <Link to="/main">Next</Link>
      </NavLink>
    </li>
      <h2>Here is Onomatope</h2>
    </>
  );
}

export default Onomatope;