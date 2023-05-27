import { useState } from 'react'
import Main from './components/Main';
import { BrowserRouter, Route,Switch ,Link,NavLink} from 'react-router-dom';

function Page() {
  
  return (
    <BrowserRouter>
    <h1>Hello React Router</h1>
    <ul>
        <li>
          <NavLink activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }} activeClassName="active" exact to="/">
            <Link to="/">Theme</Link>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/onomatope">
          <Link to="/onomatope">Onomatope</Link>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/app">
          <Link to="/app">App</Link>
          </NavLink>
        </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Theme}>
      </Route>
      <Route path="/onomatope" component={Onomatope}>
      </Route>
      <Route path="/app" component={App}>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}


function Theme() {
  return <h2>Theme</h2>;
}

function Onomatope() {
  return <h2>Onomatope</h2>;
}

function App() {
  
  return (
    <div className="App">
        <Main/>
    </div>
  )
}

export default Page;