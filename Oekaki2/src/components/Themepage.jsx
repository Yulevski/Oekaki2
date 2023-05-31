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
    <button onClick={() => setThemeValue('TVの星占いが最下位であった')}>TVの星占いが最下位であった</button>
    <button onClick={() => setThemeValue('真夏の外出')}>真夏の外出</button>
    <button onClick={() => setThemeValue('昼食後に眠い')}>昼食後に眠い</button>
    <button onClick={() => setThemeValue('春の予感')}>春の予感</button>
    <button onClick={() => setThemeValue('朝もう少し寝たい時')}>朝もう少し寝たい時</button>
    <button onClick={() => setThemeValue('冬の予感')}>冬の予感</button>

    </div>
    
    
  )
}

export default Themepage;