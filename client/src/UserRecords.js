
 import UserRecord from "./UserRecord";

function UserRecords( { userrecords, deleteUserRecord }) {


 

    return(
        <div  id="userrecords">
            
            {userrecords ? userrecords.map((record) => <UserRecord   deleteUserRecord={deleteUserRecord} key={record.id} record={record}></UserRecord>) : null}
           
           
        </div>
    )
}

export default UserRecords

