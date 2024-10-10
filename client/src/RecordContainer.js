import Record from "./Record"

function RecordContainer({records}) {
    console.log("Rc loaded")
    console.log(records)


    return (
        <div id="rcont">
            {records.map((record) => <Record  key={record.id} record={record} records={records}></Record>)}

        </div>
    )
}
export default RecordContainer