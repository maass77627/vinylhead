
import {useState} from "react";

function NewRecord() {

    const [formData, setFormData] = useState({
        title: "George",
        image: "hello",
        description: "what it is",
        user_id: 2
       })

       function handleTitleChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            title: e.target.value
        })
       }

       function handleImageChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
           image: e.target.value
        })
       }

       function handleDescriptionChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
           description: e.target.value
        })
       }

       function handleIdChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
           user_id: e.target.value
        })
       }

       function handleSubmit(e) {
        e.preventDefault()
            console.log(formData)
            fetch("/records", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }, 
                body: JSON.stringify(formData)
              })
       }

       
    
        

       

    return(
        <div id="recordform">
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input onChange={handleTitleChange} type="text" value={formData.title}></input><br></br>
                    <label>Image</label>
                    <input onChange={handleImageChange} type="text" value={formData.image}></input><br></br>
                    <label>Description</label>
                    <input onChange={handleDescriptionChange} type="text" value={formData.description}></input><br></br>
                    <label>user_id</label>
                    <input onChange={handleIdChange} type="text" value={formData.user_id}></input><br></br>
                    <button type="submit">submit</button>
                </form>


        </div>
    )
}

export default NewRecord