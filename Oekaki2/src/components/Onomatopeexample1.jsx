import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Onomatopeexample1.css';



function Onomatopeexample1({themeValue,onomatopeValue, setOnomatopeValue}) {
  
  const history = useHistory();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (onomatope) => {
    setSelectedButton(onomatope);
    setOnomatopeValue(onomatope);
  };

  return (
    <>
         <h2>例の中から選んで「{themeValue}」に合うオノマトペを入力！</h2>
      <button
        onClick={() => handleButtonClick('がたがた')}
        className={selectedButton === 'がたがた' ? 'selected' : ''}>
        がたがた
      </button>
      <button
        onClick={() => handleButtonClick('がやがや')}
        className={selectedButton === 'がやがや' ? 'selected' : ''}>
        がやがや
      </button>
      <button
        onClick={() => handleButtonClick('からから')}
        className={selectedButton === 'からから' ? 'selected' : ''}>
        からから
      </button>
      <button
        onClick={() => handleButtonClick('がらがら')}
        className={selectedButton === 'がらがら' ? 'selected' : ''}>
        がらがら
      </button>
      <button
        onClick={() => handleButtonClick('がんがん')}
        className={selectedButton === 'がんがん' ? 'selected' : ''}>
        がんがん
      </button>
      <button
        onClick={() => handleButtonClick('ぎりぎり')}
        className={selectedButton === 'ぎりぎり' ? 'selected' : ''}>
        ぎりぎり
      </button>
      <button
        onClick={() => handleButtonClick('ぐずぐず')}
        className={selectedButton === 'ぐずぐず' ? 'selected' : ''}>
        ぐずぐず
      </button>
      <button
        onClick={() => handleButtonClick('げらげら')}
        className={selectedButton === 'げらげら' ? 'selected' : ''}>
        げらげら
      </button>
      <button
        onClick={() => handleButtonClick('ころころ')}
        className={selectedButton === 'ころころ' ? 'selected' : ''}>
        ころころ
      </button>
      <button
        onClick={() => handleButtonClick('ごろごろ')}
        className={selectedButton === 'ごろごろ' ? 'selected' : ''}>
        ごろごろ
      </button>
      <button
        onClick={() => handleButtonClick('ざあざあ')}
        className={selectedButton === 'ざあざあ' ? 'selected' : ''}>
        ざあざあ
      </button>
      <button
        onClick={() => handleButtonClick('さらさら')}
        className={selectedButton === 'さらさら' ? 'selected' : ''}>
        さらさら
      </button>
      <button
        onClick={() => handleButtonClick('ざらざら')}
        className={selectedButton === 'ざらざら' ? 'selected' : ''}>
        ざらざら
      </button>
      <button
        onClick={() => handleButtonClick('だぶだぶ')}
        className={selectedButton === 'だぶだぶ' ? 'selected' : ''}>
        だぶだぶ
      </button>
      <button
        onClick={() => handleButtonClick('つるつる')}
        className={selectedButton === 'つるつる' ? 'selected' : ''}>
        つるつる
      </button>
      <button
        onClick={() => handleButtonClick('どきどき')}
        className={selectedButton === 'どきどき' ? 'selected' : ''}>
        どきどき
      </button>
      <button
        onClick={() => handleButtonClick('どんどん')}
        className={selectedButton === 'どんどん' ? 'selected' : ''}>
        どんどん
      </button>
      <button
        onClick={() => handleButtonClick('ばらばら')}
        className={selectedButton === 'ばらばら' ? 'selected' : ''}>
        ばらばら
      </button>
      
    <button onClick={() => history.goBack()}>Go Back</button>
    </>
  );
}

export default Onomatopeexample1