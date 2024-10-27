
 import UserRecord from "./UserRecord";

function UserRecords( { userrecords, deleteUserRecord, showColl }) {


 

    return(
        <div  id="userrecords">
            
            {userrecords ? userrecords.map((record) => <UserRecord  showColl={showColl} deleteUserRecord={deleteUserRecord} key={record.id} record={record}></UserRecord>) : null}
           
           
        </div>
    )
}

export default UserRecords

