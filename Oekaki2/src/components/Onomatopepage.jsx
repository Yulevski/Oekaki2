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
      <h2>Here is Onomatope  「{themeValue}」に合うオノマトペを入力！</h2>
      <textarea placeholder="オノマトペ？"value={onomatopeValue} onChange={handleChange} />
    {/* <button onClick={() => setOnomatopeValue('Value 1')}>Button 1</button> */}
    {/* 例に飛ぶリンク↓ */}
    <li>
      <NavLink activeClassName="active" to="/onomatopeexample1">
        <Link to="/onomatopeexample1">to example</Link>
      </NavLink>
    </li>
    </>
  );
}

export default Onomatope;