import { useState } from 'react';

function Record({record, deleteRecord}) {
    console.log(record)
    console.log("record loaded")
    const [toggle, setToggle] = useState(false)


    function handleClick() {
       setToggle(!toggle)
    }



function deletedRecord(record) {
    console.log(record)
    fetch(`/records/${record.id}`, {
        method: "DELETE"
    })
    deleteRecord(record.id)
}

 function addRecord(record) {
    console.log(record)
    console.log(record.user_id)
    
      fetch(`/users/${record.user_id}/records`, {
        // mode: 'no-cors',
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        }, 
        body: JSON.stringify(record)
})
.then((response) => response.json())
.then((json) => console.log(json))
 }



function handleStyle(e) {
    console.log(e.target)
     e.target.className = "empty"

}

    return (
        <div key={record.id} id="record">
            <p> {record.title.toUpperCase()}</p>
            <img onClick={handleClick} id="record_image" src={record.image} alt="record"></img>
            <span onClick={handleStyle} className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              {toggle ? <div id="options"> <label>Description:</label> <p>{record.description}</p> <br></br> <button onClick={(record) => deletedRecord(record)}>delete</button> <br></br> <button onClick={(record) => addRecord(record)}>add</button> </div> : null} 
             {/* <div id="options">
             {toggle ? <p>{record.description}</p> : null}
            {toggle ? <button onClick={deleteRecord(record)}>delete</button> : null}
            {toggle ? <button onClick={addRecord(record)}>add</button> : null} 
            </div> */}
        </div>

    )
}

export default Record