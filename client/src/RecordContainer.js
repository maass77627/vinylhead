import Record from "./Record"

function RecordContainer({records, user, deleteRecord, showColl}) {
    
    

    return (
        <div id="rcont">
            {records.map((record) => <Record user={user} showColl={showColl} deleteRecord={deleteRecord} key={record.id} record={record} records={records}></Record>)}
        </div>
    )
}
export default RecordContainer