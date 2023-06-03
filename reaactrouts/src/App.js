import logo from './logo.svg';
import './App.css';

import {Routes, Route} from "react-router-dom"
import Signup from './Signup';
import Login from './Login';
import LandingPage from './Landingpage';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/' element={<LandingPage/>}/>
   </Routes>
  );
}

export default App;



// Hooks: useEffect  : making side effect or after effect in your components

// hook responsible for side effects like API calling , some kind of dom manupulaion

