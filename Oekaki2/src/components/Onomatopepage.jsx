import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';


function Onomatope({themeValue,onomatopeValue, setOnomatopeValue}) {
  
  const handleChange = (event) => {
    setOnomatopeValue(event.target.value);
  };

  return (
    <>
    <li>
      <NavLink activeClassName="active" to="/main">
        <Link to="/main">Next</Link>
      </NavLink>
    </li>
      <h2>Here is Onomatope {themeValue}</h2>
      <textarea value={onomatopeValue} onChange={handleChange} />

    </>
  );
}

export default Onomatope;