import { useState } from 'react'
import Main from './components/Main';
import Loginpage from './components/Loginpage';
import Themepage from './components/Themepage';
import Onomatopepage from './components/Onomatopepage';
import Onomatopeexample1 from './components/onomatopeexample1';
import { BrowserRouter, Route,Switch ,Link,NavLink} from 'react-router-dom';
import {useSessionStorage} from 'react-use';

function Page() {
  const [themeValue, setThemeValue] = useState('');
  const [onomatopeValue, setOnomatopeValue] = useState('');
  const [username, setUser] = useState('');
  const [session, setSession] = useSessionStorage('userSession', {});

  const setSessionUser = (username) => {
    setSession({ username });
  };

  const clearUser = () => {
    setSession({});
  };  


  return (
    <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={Themepagefunction} >
       */}
      {/* <Route exact path="/themepage" render={() => <Themepage themeValue={themeValue} setThemeValue={setThemeValue}/>} /> */}
      {/* <Route exact path="/" render={() => <Loginpage setUser={setUser}/>} /> */}

       <Route exact path="/" render={() => <Loginpage setUser={setSessionUser} />} />
        <Route
          exact
          path="/themepage"
          render={() =>
            session.username ? <Themepage username={session.username} clearUser={clearUser} /> : <Loginpage setUser={setSessionUser} />
          }
        />
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


