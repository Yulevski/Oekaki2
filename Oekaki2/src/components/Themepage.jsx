import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';


function Themepage({themeValue,setThemeValue }) {
  // const [text, setText] = useState('');

  const handleChange = (event) => {
    setThemeValue(event.target.value);
  };


  return( 
    
    <div className="Themepage">
    <li>
      <NavLink activeClassName="active" to="/onomatope">
        <Link to="/onomatope">Next</Link>
      </NavLink>
    </li>
    <h2>Here is Theme in themepage</h2>
    {/* <textarea value={themeValue} onChange={handleChange} /> */}
    {/* Six buttons with assigned values */}
    <button onClick={() => setThemeValue('Value 1')}>Button 1</button>
    <button onClick={() => setThemeValue('Value 2')}>Button 2</button>
    <button onClick={() => setThemeValue('Value 3')}>Button 3</button>
    <button onClick={() => setThemeValue('Value 4')}>Button 4</button>
    <button onClick={() => setThemeValue('Value 5')}>Button 5</button>
    <button onClick={() => setThemeValue('Value 6')}>Button 6</button>
    </div>
    
    
  )
}

export default Themepage;