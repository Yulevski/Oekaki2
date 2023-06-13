import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';


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
    <>
    <li>
        <Link to="/main">Next</Link>
    </li>
      <h2>Here is Onomatope  「{themeValue}」に合うオノマトペを入力！</h2>
      <textarea placeholder="オノマトペ？"value={onomatopeValue} onChange={handleChange} />
    {/* <button onClick={() => setOnomatopeValue('Value 1')}>Button 1</button> */}
    {/* 例に飛ぶリンク↓ */}
    <div className='buttons-onomatope'>
    <button
        onClick={() => handleButtonClick('くるくる')}
        className={selectedButton === 'くるくる' ? 'selected' : ''}>
        がたがた
      </button>
      <button
        onClick={() => handleButtonClick('のろのろ')}
        className={selectedButton === 'のろのろ' ? 'selected' : ''}>
        がたがた
      </button>
      <button
        onClick={() => handleButtonClick('ぴかぴか')}
        className={selectedButton === 'ぴかぴか' ? 'selected' : ''}>
        ぴかぴか
      </button>
      <button
        onClick={() => handleButtonClick('すらすら')}
        className={selectedButton === 'すらすら' ? 'selected' : ''}>
        すらすら
      </button>
      <button
        onClick={() => handleButtonClick('にこにこ')}
        className={selectedButton === 'にこにこ' ? 'selected' : ''}>
        にこにこ
      </button>
      <button
        onClick={() => handleButtonClick('はらはら')}
        className={selectedButton === 'はらはら' ? 'selected' : ''}>
        はらはら
      </button>
      <button
        onClick={() => handleButtonClick('わくわく')}
        className={selectedButton === 'わくわく' ? 'selected' : ''}>
        わくわく
      </button>
      <button
        onClick={() => handleButtonClick('むかむか')}
        className={selectedButton === 'むかむか' ? 'selected' : ''}>
        むかむか
      </button>
      <button
        onClick={() => handleButtonClick('どきどき')}
        className={selectedButton === 'どきどき' ? 'selected' : ''}>
        どきどき
      </button>

    </div>
      

    </>
  );
}

export default Onomatope;