
 import UserRecord from "./UserRecord";

function UserRecords( { userrecords, showColl }) {


 

    return(
        <div  id="userrecords">
            
            {userrecords ? userrecords.map((record) => <UserRecord  showColl={showColl}  key={record.id} record={record}></UserRecord>) : null}
           
           
        </div>
    )
}

export default UserRecords

