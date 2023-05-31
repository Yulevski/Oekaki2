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
    <textarea value={themeValue} onChange={handleChange} />
    
    </div>
    
  )
}

export default Themepage;