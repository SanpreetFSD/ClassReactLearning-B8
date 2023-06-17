import logo from './logo.svg';
import './App.css';

import {Routes, Route} from "react-router-dom"
import Signup from './Signup';
import Login from './Login';
import LandingPage from './Landingpage';


import Main from './Main';
import { useCookies } from 'react-cookie';
import SamleTest from './SamleTest';
import Porduct from './Product';
import { useRef } from 'react';



function App() {

  // How to use react cookies
  // user hook, how it is differnt with usestate hook ?
  // routing ==> useParams (react-router-dom)

  const [cookie, setCookie] = useCookies("");

  return (
   <Routes>
    {/* <Route path='/' element={<Signup/>}/> */}
    {/* <Route path='/login' element={<Login/>}/> */}

    <Route path='/' element={<SamleTest setCookie={setCookie}/>}/>
    <Route path='/Pro/:userid' element={<Porduct/>}/>

    {/* <Route path='/Landingpage' element={<LandingPage/>}/> */}
    {/* <Route path='/Main' element={<Main/>}/> */}
   </Routes>
  );
}

export default App;



// Hooks: useEffect  : making side effect or after effect in your components

// hook responsible for side effects like API calling , some kind of dom manupulaion

//  Hook : create context hook to use as centerlized component (createcontext >> use context)

