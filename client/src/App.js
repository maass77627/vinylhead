
import './App.css';
 import Signup from './Signup';
//  import Login from './Login';
//  import { useState } from "react";
 import { useEffect } from "react";
function App() {

  //  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/records", {
      mode: 'no-cors'
  })
    .then((response) => response.json())
    .then((json) => { console.log(json)
    })
     }, []) 





  return (
    <div className="App">
      <header className="App-header">
      <h1>VinylHead</h1>
      <img id="headimage" src="https://th.bing.com/th/id/OIP.3J7PcVZf3uIt04PUYAvMTwHaHa?rs=1&pid=ImgDetMain record.jpg" alt="record"></img>
      </header>



       <Signup></Signup> 
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
