import { useState } from 'react'
import Main from './components/Main';
import Themepage from './components/Themepage';
import Onomatopepage from './components/Onomatopepage';
import Onomatopeexample1 from './components/onomatopeexample1';
import { BrowserRouter, Route,Switch ,Link,NavLink} from 'react-router-dom';

function Page() {
  const [themeValue, setThemeValue] = useState('');
  const [onomatopeValue, setOnomatopeValue] = useState('');


  return (
    <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={Themepagefunction} >
       */}
      <Route exact path="/" render={() => <Themepage themeValue={themeValue} setThemeValue={setThemeValue}/>} />
      <Route path="/onomatope" render={() => <Onomatopepage themeValue={themeValue} onomatopeValue={onomatopeValue} 
      setOnomatopeValue={setOnomatopeValue} setThemeValue={setThemeValue}/>} />

      <Route path="/onomatopeexample1" render={() => <Onomatopeexample1 themeValue={themeValue} onomatopeValue={onomatopeValue} 
      setOnomatopeValue={setOnomatopeValue} setThemeValue={setThemeValue}/>} />
      

      {/* <Route path="/main" component={Mainfunction}>
      </Route> */}
      <Route path="/main" render={() => <Main themeValue={themeValue} onomatopeValue={onomatopeValue} />} />


    </Switch>
  </BrowserRouter>
  );
}

export default Page;