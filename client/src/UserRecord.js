import { useState } from "react";

function UserRecord({record}) {
    const [toggle, setToggle] = useState(false)

 function handleClick() {
    setToggle(!toggle)
 }

 function deleteRec(e) {
    
    // console.log(record)
    
    // (fetch(`/records/${newid}`), {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ user_id: null})
    // })
} 


    return (
        <div id={record.id} className="userrecord">
            <p>{record.title}</p> 
            <img onClick={handleClick} id="userimage" src={record.image} alt="record"></img><br></br>
            {toggle ? <button onClick={(e) => deleteRec(e)}>delete</button> : null} 
            </div>
            

    )
}

export default UserRecord