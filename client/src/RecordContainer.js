import Record from "./Record"

function RecordContainer({records, user, userrecords}) {
    console.log("Rc loaded")
    console.log(records)
    console.log(user)
    console.log(userrecords)
    // const userrecords = records.map((record) => {record.user_id == user.id})
    // console.log(userrecords)

    return (
        <div id="rcont">
            {/* {userrecords ? } */}
            {records.map((record) => <Record  key={record.id} record={record} records={records}></Record>)}

        </div>
    )
}
export default RecordContainer