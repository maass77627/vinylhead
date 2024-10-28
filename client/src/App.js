
  import './App.css';
  import Signup from './Signup';
  import RecordContainer from './RecordContainer';
  import UserRecords from "./UserRecords"
  import Login from './Login';
  import { useState } from "react";
  import { useEffect } from "react";
  import NewRecord from './NewRecord';
  // import { BrowserRouter, Routes, Route } from 'react-router-dom';
  // import { BrowserRouter, Routes, Route } from 'react-router-dom';
//  import { BrowserRouter, Route } from 'react-router-dom';
  

function App() {
    const [records, setRecords] = useState("")
    const [user, setUser] = useState(null);
    const [appLoaded, setAppLoaded] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [userrecords, setUserrecords] = useState("")
    const [showForm, setShowForm] = useState(false)

   useEffect(() => {
    fetch("/records", {
      mode: 'no-cors'
  })
    .then((response) => response.json())
    .then((json) => { 
      setRecords(json)
      
      setAppLoaded(true)

    })
      }, [records]) 

      

      function deleteRecord(id) {
       
          const updatedRecords = records.filter(record => record.id !== id)
          setRecords(updatedRecords)
      }




      useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
      }, []);

      function handleClick() {
        setToggle(!toggle)
      }


      function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => logOut())
      
      }

      function logOut() {
        setUser(null)
      }

      function handleForm() {
        setShowForm(!showForm)
      }

      function showColl(e) {
       
        fetch(`/users/${user.id}/records`, {
          mode: 'no-cors'
      })
        .then((response) => response.json())
        .then((json) => { 
           setUserrecords(json)
    
        })

      }

  return (
    <div className="App">
      <header className="App-header">
          <h1>VinylHead</h1>
          <img id="headimage" src="https://th.bing.com/th/id/OIP.3J7PcVZf3uIt04PUYAvMTwHaHa?rs=1&pid=ImgDetMain record.jpg" alt="record"></img>
          {user ? <h2>Welcome, {user.username}!</h2> : <Login onLogin={setUser} />}
          {user ? <button onClick={(e) => showColl(e)}>My Collection</button> : null}
      </header>

      

      
      {/* <BrowserRouter>
            <Routes>
            <Route path="/" element={<NewRecord />}>
            </Route>
            </Routes>
       </BrowserRouter> */}
    
       
        {/* <span>click records for options</span><br></br> */}
        <button onClick={handleClick}>Signup</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleForm}>Add Record</button>
       
       {showForm ? <NewRecord></NewRecord> : null}
       {toggle ? <Signup></Signup> : null}
       {userrecords ? <UserRecords showColl={showColl}  userrecords={userrecords}></UserRecords> : null} 
       {appLoaded ? <RecordContainer showColl={showColl} deleteRecord={deleteRecord} userrecords={userrecords} records={records} user={user}></RecordContainer> : null}

    </div>
  );
}

export default App;
