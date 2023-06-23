import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Onomatopepage.css';


function Onomatope({themeValue,onomatopeValue, setOnomatopeValue}) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showButtons, setShowButtons] = useState(true);

  const handleChange = (event) => {
    setOnomatopeValue(event.target.value);
  };
  const handleButtonClick = (onomatope) => {
    setSelectedButton(onomatope);
    setOnomatopeValue(onomatope);
    // setShowButtons(true);
  };
  const handleButtonClickNext = () => {
    setShowButtons(!showButtons);
  };
  
  

  return (
    <><div className='Onomatope-page'>

     <div className='top-onomatope'>
       <h2 className='onomatope-selection24'>③</h2>
       <h2 className='onomatope-selection32'>「{themeValue}」</h2>
       <h2 className='onomatope-selection24'>に合う</h2>
       <h2 className='onomatope-selection32'>オノマトペ</h2>
       <h2 className='onomatope-selection24'>を決めよう</h2>
       <li className='bottom-onomatope'>
        <h2 className='onomatope-next'>④オノマトペを決めたら<Link to="/main">次へ</Link></h2>
      </li>
     </div>

      <div className='onomatope-input'>
      <textarea className="text-input" placeholder="どきどき、ぽたぽた、etc"value={onomatopeValue} onChange={handleChange} />
      <button className="hint-button" onClick={handleButtonClickNext}>ヒントを表示</button>      </div>    
      {/* <button onClick={() => setOnomatopeValue('Value 1')}>Button 1</button> */}
    {/* 例に飛ぶリンク↓ */}
    {/* <div className='buttons-onomatope'> */}
    <p1 className="top3">↑オノマトペを入力しよう</p1>
      <button
        onClick={() => handleButtonClick('くるくる')}
        className={selectedButton === 'くるくる' ? 'selected' : 'area1'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        くるくる
      </button>
      <button
        onClick={() => handleButtonClick('のろのろ')}
        className={selectedButton === 'のろのろ' ? 'selected' : 'area2'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        のろのろ
      </button>
      <button
        onClick={() => handleButtonClick('ぴかぴか')}
        className={selectedButton === 'ぴかぴか' ? 'selected' : 'area3'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        ぴかぴか
      </button>
      <button
        onClick={() => handleButtonClick('すらすら')}
        className={selectedButton === 'すらすら' ? 'selected' : 'area4'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        すらすら
      </button>
      <button
        onClick={() => handleButtonClick('にこにこ')}
        className={selectedButton === 'にこにこ' ? 'selected' : 'area5'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        にこにこ
      </button>
      <button
        onClick={() => handleButtonClick('はらはら')}
        className={selectedButton === 'はらはら' ? 'selected' : 'area6'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        はらはら
      </button>
      <button
        onClick={() => handleButtonClick('わくわく')}
        className={selectedButton === 'わくわく' ? 'selected' : 'area7'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        わくわく
      </button>
      <button
        onClick={() => handleButtonClick('むかむか')}
        className={selectedButton === 'むかむか' ? 'selected' : 'area8'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        むかむか
      </button>
      <button
        onClick={() => handleButtonClick('どきどき')}
        className={selectedButton === 'どきどき' ? 'selected' : 'area9'}
        style={{ visibility: showButtons ? 'hidden' : 'visible' }}>
        どきどき
      </button>

    {/* </div> */}

    

    </div>
    
      

    </>
  );
}

export default Onomatope;