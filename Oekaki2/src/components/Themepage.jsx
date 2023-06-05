import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Themepage.css';


function Themepage({themeValue,setThemeValue }) {
  // const [text, setText] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);

  const handleChange = (event) => {
    setThemeValue(event.target.value); 
  };

  const handleButtonClick = (theme) => {
    setSelectedButton(theme);
    setThemeValue(theme);
  };
  

  return( 
    <>
    <div className="Themepage">
    <li>
      <NavLink activeClassName="active" to="/onomatope">
        <Link to="/onomatope">Next</Link>
      </NavLink>
    </li>
    <h2>Here is Theme in themepage</h2>
    {/* <textarea value={themeValue} onChange={handleChange} /> */}
    {/* Six buttons with assigned values */}

    <button onClick={() =>handleButtonClick('TVの星占いが最下位であった')}
        className={selectedButton === 'TVの星占いが最下位であった' ? 'selected' : ''}
    >TVの星占いが最下位であった</button>
    
   <button onClick={() => handleButtonClick('真夏の外出')}
          className={selectedButton === '真夏の外出' ? 'selected' : ''}>
          真夏の外出
   </button>

    <button onClick={() => handleButtonClick('昼食後に眠い')}
          className={selectedButton === '昼食後に眠い' ? 'selected' : ''}
    >昼食後に眠い</button>

    <button onClick={() => handleButtonClick('春の予感')}
          className={selectedButton === '春の予感' ? 'selected' : ''}
    >春の予感</button>

    <button onClick={() => handleButtonClick('朝もう少し寝たい時')}
          className={selectedButton === '朝もう少し寝たい時' ? 'selected' : ''}
    >朝もう少し寝たい時</button>
    
    <button  onClick={() => handleButtonClick('冬の予感')}
          className={selectedButton === '冬の予感' ? 'selected' : ''}
    >冬の予感</button>

    </div>
</>
    
  )
}

export default Themepage;