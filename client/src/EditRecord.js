
import { useState } from "react";

function EditRecord({record}) {

    const [formData, setFormData] = useState({
        title: record.title,
        image: record.image,
        description: record.description,
        user_id: record.user_id

    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.value)
        fetch("")
        .then((response) => response.json())
        .then((json) => {
            setFormData(json)
            console.log(json)})
        
    }

    return (
        <div id="edit">
            <form onSubmit={handleSubmit}>
                <lable>Title:</lable>
                <input type="text" value={formData.title}></input><br></br>
                <lable>Image:</lable>
                <input type="text" value={formData.image}></input><br></br>
                <lable>Description:</lable>
                <input type="text" value={formData.description}></input><br></br>
                <lable>user_id:</lable>
                <input type="text" value={formData.user_id}></input><br></br>
                <button>submit</button>
            </form>

        </div>
    )

}

export default EditRecord