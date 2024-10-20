import { useState } from 'react';

function Record({record, deleteRecord, user}) {
    // console.log(record)
    // console.log("record loaded")
    const [toggle, setToggle] = useState(false)


    function handleClick() {
       setToggle(!toggle)
    }



function deletedRecord(e) {
    // console.log(e.target.parentNode.parentNode.id)
    // console.log(record)
    fetch(`/records/${e.target.parentNode.parentNode.id}`, {
        method: "DELETE"
    })
      deleteRecord(e.target.parentNode.parentNode.id)
}


 function addRecord(e, record, user) {
    console.log(user)
     console.log(e.target.parentNode.parentNode.id)
     console.log(e.target.id)
    console.log(record)
    //  console.log(record.user_id)
    
      fetch(`/records/${e.target.parentNode.parentNode.id}`, {
        // mode: 'no-cors',
        method: "PATCH",
        headers: {
            "Content-type" : "application/json"
        }, 
        body: JSON.stringify({user_id: e.target.id})
})
 .then((response) => response.json())
 .then((json) => console.log(json))
 }



function handleStyle(e) {
    // console.log(e.target)
     e.target.className = "empty"

}

    return (
        <div key={record.user_id} className="record" id={record.id}>
            <p> {record.title.toUpperCase()}</p>
            <img onClick={handleClick} id="record_image" src={record.image} alt="record"></img>
            <span onClick={handleStyle} className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              {toggle ? <div id="options"> <label>Description:</label> <p>{record.description}</p> <br></br> <button onClick={(record) => deletedRecord(record)}>delete</button> <br></br> <button id={user.id} onClick={(e, record) => addRecord(e, record)}>add</button> </div> : null} 
             
        </div>

    )
}

export default Record