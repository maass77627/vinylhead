//   import Record from "react";
//  import { useState } from "react";
 import UserRecord from "./UserRecord";

function UserRecords( { userrecords }) {
// console.log(userrecords)
//  const [toggle, setToggle] = useState(false)

//  function handleClick() {
//     setToggle(!toggle)
//  }


//  function deleteRec(e) {
    
//     console.log(e)
//      console.log(e.target.parentNode.id)
    
    //   let newid = e.target.parentNode.id
    //   console.log(newid)
    // fetcher(newid)
    
    // (fetch(`/records/${newid}`), {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ user_id: null})
    // })
// } 


 

    return(
        <div  id="userrecords">
            
            {userrecords ? userrecords.map((record) => <UserRecord key={record.id} record={record}></UserRecord>) : null}
           
           
        </div>
    )
}

export default UserRecords

// {userrecords ? userrecords.map((record) => 
    // <div id={record.id} className="userrecord">
    // <p>{record.title}</p> 
    // <img onClick={handleClick} id="userimage" src={record.image} alt="record"></img><br></br>
    // {toggle ? <button onClick={(record) => deleteRec(record)}>delete</button> : null} 
    // </div>
    // ) : null} 