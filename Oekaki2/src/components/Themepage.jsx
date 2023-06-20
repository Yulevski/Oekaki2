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
    <div className="Theme-page">

      <div className='top-theme'>
          <h1 className='theme-selection24'>①この中から</h1>
          <h1 className='theme-selection32'>感情がイメージしやすいテーマ</h1>
          <h1 className='theme-selection24'>を選ぼう</h1>
      </div>

    <li className='bottom-theme'>
    <h2 className='theme-next'>②テーマを選んだら<Link to="/onomatope">次へ</Link></h2>
    </li>
    {/* <textarea value={themeValue} onChange={handleChange} /> */}
    {/* Six buttons with assigned values */}
   {/* <div className="buttons"> */}
    <button onClick={() =>handleButtonClick('TVの星占いが最下位であった')}
        className={selectedButton === 'TVの星占いが最下位であった' ? 'selected' : 'buttons-theme1'}
    >TVの星占いが最下位であった</button>
    
   <button onClick={() => handleButtonClick('真夏の外出')}
          className={selectedButton === '真夏の外出' ? 'selected' : 'buttons-theme2'}>
          真夏の外出
   </button>

    <button onClick={() => handleButtonClick('昼食後に眠い')}
          className={selectedButton === '昼食後に眠い' ? 'selected' : 'buttons-theme3'}
    >昼食後に眠い</button>

    <button onClick={() => handleButtonClick('春の予感')}
          className={selectedButton === '春の予感' ? 'selected' : 'buttons-theme4'}
    >春の予感</button>

    <button onClick={() => handleButtonClick('朝もう少し寝たい時')}
          className={selectedButton === '朝もう少し寝たい時' ? 'selected' : 'buttons-theme5'}
    >朝もう少し寝たい時</button>
    
    <button  onClick={() => handleButtonClick('冬の予感')}
          className={selectedButton === '冬の予感' ? 'selected' : 'buttons-theme6'}
    >冬の予感</button>
    {/* </div> */}
    </div>
</>
    
  )
}

export default Themepage;