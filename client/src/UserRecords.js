//   import Record from "react";
// // import { useState } from "react";

function UserRecords( { userrecords }) {
console.log(userrecords)


    return(
        <div id="userrecords">
             {/* {userrecords ? userrecords.map((record) => <Record key={record.id} record={record}></Record>) : null}  */}
            {userrecords ? userrecords.map((record) => 
            <div id="userrecord">
            <p>{record.title}</p> 
            <img id="userimage"src={record.image} alt="record"></img>
            </div>
            ) : null} 
        
        </div>
    )
}

export default UserRecords