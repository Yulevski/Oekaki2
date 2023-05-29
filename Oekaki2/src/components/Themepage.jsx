import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';


function Theme() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };


  return( 
    
    <><li>
      <NavLink activeClassName="active" to="/onomatope">
        <Link to="/onomatope">Next</Link>
      </NavLink>
    </li>
    <h2>Here is Theme in themepage</h2>
    <textarea value={text} onChange={handleChange} />
    </>
    
  )
}

export default Theme;