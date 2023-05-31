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
      {/* <textarea value={onomatopeValue} onChange={handleChange} /> */}
    <button onClick={() => setOnomatopeValue('Value 1')}>Button 1</button>
    <button onClick={() => setOnomatopeValue('Value 2')}>Button 2</button>
    <button onClick={() => setOnomatopeValue('Value 3')}>Button 3</button>
    <button onClick={() => setOnomatopeValue('Value 4')}>Button 4</button>
    <button onClick={() => setOnomatopeValue('Value 5')}>Button 5</button>
    <button onClick={() => setOnomatopeValue('Value 6')}>Button 6</button>

    </>
  );
}

export default Onomatope;