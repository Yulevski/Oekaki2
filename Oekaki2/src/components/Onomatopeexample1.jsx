import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function Onomatopeexample1({themeValue,onomatopeValue, setOnomatopeValue}) {
  
  const history = useHistory();

  return (
    <>
         <h2>例の中から選んで「{themeValue}」に合うオノマトペを入力！</h2>
    <button onClick={() => setOnomatopeValue('Example 1')}>Example 1</button>
    <button onClick={() => history.goBack()}>Go Back</button>
    </>
  );
}

export default Onomatopeexample1