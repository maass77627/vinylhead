//   import Record from "react";
 import { useState } from "react";

function UserRecords( { userrecords }) {
console.log(userrecords)
 const [toggle, setToggle] = useState(false)

 function handleClick() {
    setToggle(!toggle)
 }

 function deleteRec(e) {
    console.log(e.target)

 }

    return(
        <div id="userrecords">
            
            {userrecords ? userrecords.map((record) => 
            <div key={record.id} id="userrecord">
            <p>{record.title}</p> 
            <img onClick={handleClick} id="userimage" src={record.image} alt="record"></img><br></br>
            {toggle ? <button onClick={deleteRec}>delete</button> : null} 
            </div>
            ) : null} 
           
        </div>
    )
}

export default UserRecords