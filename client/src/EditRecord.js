
import { useState } from "react";

function EditRecord({record}) {

    const [formData, setFormData] = useState({
        title: record.title,
        image: record.image,
        description: record.description,
        user_id: record.user_id

    })

    function handleTitleChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            title: e.target.value
        })

    }

    function handleImageChange(e) {
        setFormData({
            ...formData, 
            image: e.target.value
        })

    }

    function handleDescriptionChange(e) {
        setFormData({
            ...formData, 
            description: e.target.value
        })

    }

    function handleUser_idChange(e) {
        setFormData({
            ...formData, 
            user_id: e.target.value
        })

    }

    function handleSubmit(e) {
        console.log(formData)
        e.preventDefault()
        console.log(e.target.parentNode.id)
        fetch(`/records/${e.target.parentNode.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({formData})
        })
         .then((response) => response.json())
         .then((json) => {
            setFormData(json)
            console.log(json)})
        }

    return (
        <div className="edit" id={record.id}>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input onChange={handleTitleChange} type="text" value={formData.title}></input><br></br>
                <label>Image:</label>
                <input onChange={handleImageChange} type="text" value={formData.image}></input><br></br>
                <label>Description:</label>
                <input onChange={handleDescriptionChange} type="text" value={formData.description}></input><br></br>
                <label>user_id:</label>
                <input onChange={handleUser_idChange}type="text" value={formData.user_id}></input><br></br>
                <button>submit</button>
            </form>

        </div>
    )

}

export default EditRecord