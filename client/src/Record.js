

function Record({record}) {
console.log("record loaded")



    return (
        <div id="record">
            <p> {record.title}</p>
            <img id="record_image" src={record.image} alt="record"></img>
            <p>{record.description}</p>
        </div>

    )
}

export default Record