import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Contactus from './components/ContactUs'

// function App() {
//   return (
//     <div className="">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Header></Header>
//       <Hello></Hello>
//       <Contactus></Contactus>
//     </div>
//   );
// }


function App(){
  const contactdetails = {
    name: "San",
    phone: "99999999",
    email: "san@test.com"

  }
  const salutation = ["Hello", "Namaste", "Ola", "hola"]
  return(
    <div>
      <Header></Header>
      <Contactus name={contactdetails.name} phone={contactdetails.phone} email={contactdetails.email} salutation={contactdetails.salutation}>

      </Contactus>
    </div>
  );


}

export default App;
