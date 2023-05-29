import { useState } from 'react'
import Main from './components/Main';
import Themepage from './components/Themepage';
import Onomatopepage from './components/Onomatopepage';
import { BrowserRouter, Route,Switch ,Link,NavLink} from 'react-router-dom';

function Page() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Themepagefunction}>
      </Route>
      <Route path="/onomatope" component={Onomatopefunction}>
      </Route>
      <Route path="/main" component={Mainfunction}>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}


// function Themepagefunction() {
//   return( 
//         <><li>
//       <NavLink activeClassName="active" to="/onomatope">
//         <Link to="/onomatope">Next</Link>
//       </NavLink>
//     </li>
//     <h2>Here is Theme</h2></>)
// }

function Themepagefunction() {
  return (
    
    <div className="Themepage">
      <Themepage />
    </div>
    
  )
}

function Onomatopefunction() {
  return(
    ( 
      <div className="Onomatope">
        <Onomatopepage />
      </div>
      )
  )

}

function Mainfunction() {
  
  return (
    <div className="Main">
        <Main/>
    </div>
  )
}

export default Page;