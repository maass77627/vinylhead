import { useState } from 'react';

function Record({record}) {
console.log("record loaded")
const [toggle, setToggle] = useState(false)

function handleClick() {
    setToggle(!toggle)
}

    return (
        <div id="record">
            <p> {record.title}</p>
            <img onClick={handleClick} id="record_image" src={record.image} alt="record"></img>
            {toggle ? <p>{record.description}</p> : null}
        </div>

    )
}

export default Record