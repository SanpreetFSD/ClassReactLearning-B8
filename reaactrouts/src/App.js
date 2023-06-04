import logo from './logo.svg';
import './App.css';

import {Routes, Route} from "react-router-dom"
import Signup from './Signup';
import Login from './Login';
import LandingPage from './Landingpage';


import Main from './Main';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/Landingpage' element={<LandingPage/>}/>
    <Route path='/Main' element={<Main/>}/>
   </Routes>
  );
}

export default App;



// Hooks: useEffect  : making side effect or after effect in your components

// hook responsible for side effects like API calling , some kind of dom manupulaion

