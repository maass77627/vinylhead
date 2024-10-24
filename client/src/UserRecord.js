import { useState } from "react";

function UserRecord({record, deleteUserRecord}) {
    // console.log(userrecords)
    const [toggle, setToggle] = useState(false)

 function handleClick() {
    setToggle(!toggle)
 }

 function deleteRec(e) {
    // console.log(userrecords)
     console.log(e.target.parentNode.id)
     console.log(e.target.parentNode.childNodes[0].id)

     fetch(`/records/${e.target.parentNode.id}`, {
             method: "PATCH", 
             headers: {
                "Content-Type": "application/json"
             },
             body: JSON.stringify({user_id: 0})
         })
    
    
    // fetch(`/users/${e.target.parentNode.childNodes[0].id}/records/${e.target.parentNode.id}`, {
    //     method: "DELETE"
    // })
    // deleteUserRecord(e.target.parentNode.id, userrecords)
} 


    return (
        <div id={record.id} className="userrecord">
            <p id={record.user_id}>{record.title}</p> 
            <img onClick={handleClick} id="userimage" src={record.image} alt="record"></img><br></br>
            {toggle ? <button onClick={(e) => deleteRec(e)}>delete</button> : null} 
            </div>
            

    )
}

export default UserRecord