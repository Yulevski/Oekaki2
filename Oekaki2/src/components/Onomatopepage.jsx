import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Onomatopepage.css';


function Onomatope({themeValue,onomatopeValue, setOnomatopeValue}) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleChange = (event) => {
    setOnomatopeValue(event.target.value);
  };
  const handleButtonClick = (onomatope) => {
    setSelectedButton(onomatope);
    setOnomatopeValue(onomatope);
  };

  return (
    <><div className='Onomatope-page'>

         <h2 className='top-onomatope'>③「{themeValue}」に合うオノマトペを入力しよう</h2>
      <textarea className="text-input" placeholder="オノマトペ？"value={onomatopeValue} onChange={handleChange} />
    {/* <button onClick={() => setOnomatopeValue('Value 1')}>Button 1</button> */}
    {/* 例に飛ぶリンク↓ */}
    {/* <div className='buttons-onomatope'> */}
    <p1 className="top3">または↓から選択</p1>
    <button
        onClick={() => handleButtonClick('くるくる')}
        className={selectedButton === 'くるくる' ? 'selected' : 'area1'}>
        くるくる
      </button>
      <button
        onClick={() => handleButtonClick('のろのろ')}
        className={selectedButton === 'のろのろ' ? 'selected' : 'area2'}>
        のろのろ
      </button>
      <button
        onClick={() => handleButtonClick('ぴかぴか')}
        className={selectedButton === 'ぴかぴか' ? 'selected' : 'area3'}>
        ぴかぴか
      </button>
      <button
        onClick={() => handleButtonClick('すらすら')}
        className={selectedButton === 'すらすら' ? 'selected' : 'area4'}>
        すらすら
      </button>
      <button
        onClick={() => handleButtonClick('にこにこ')}
        className={selectedButton === 'にこにこ' ? 'selected' : 'area5'}>
        にこにこ
      </button>
      <button
        onClick={() => handleButtonClick('はらはら')}
        className={selectedButton === 'はらはら' ? 'selected' : 'area6'}>
        はらはら
      </button>
      <button
        onClick={() => handleButtonClick('わくわく')}
        className={selectedButton === 'わくわく' ? 'selected' : 'area7'}>
        わくわく
      </button>
      <button
        onClick={() => handleButtonClick('むかむか')}
        className={selectedButton === 'むかむか' ? 'selected' : 'area8'}>
        むかむか
      </button>
      <button
        onClick={() => handleButtonClick('どきどき')}
        className={selectedButton === 'どきどき' ? 'selected' : 'area9'}>
        どきどき
      </button>

    {/* </div> */}

    <li className='bottom-onomatope'>
        <h2>④選択したら<Link to="/main">次へ</Link></h2>
    </li>
    </div>
    
      

    </>
  );
}

export default Onomatope;