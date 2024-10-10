
import './App.css';
import Signup from './Signup';
import RecordContainer from './RecordContainer';
//  import Login from './Login';
 import { useState } from "react";
 import { useEffect } from "react";


function App() {
    const [records, setRecords] = useState("")
  //  const [user, setUser] = useState(null);
  const [appLoaded, setAppLoaded] = useState(false)
  const [toggle, setToggle] = useState(false)

   useEffect(() => {
    fetch("/records", {
      mode: 'no-cors'
  })
    .then((response) => response.json())
    .then((json) => { 
      setRecords(json)
      console.log(json)
      console.log("useeffect loaded")
      setAppLoaded(true)

    })
      }, []) 

      function handleClick() {
        setToggle(!toggle)
      }



  return (
    <div className="App">
      <header className="App-header">

      <h1>VinylHead</h1>

      <img id="headimage" src="https://th.bing.com/th/id/OIP.3J7PcVZf3uIt04PUYAvMTwHaHa?rs=1&pid=ImgDetMain record.jpg" alt="record"></img>
      </header>


        <button onClick={handleClick}>Signup</button>


       {/* <Signup></Signup>  */}
       {toggle ? <Signup></Signup> : null}
       
       {appLoaded ? <RecordContainer records={records}></RecordContainer> : null}
      
    </div>
  );
}

export default App;
