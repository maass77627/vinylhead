import { useState } from "react"

function Login() {
    const [username, setUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(username)
        fetch("/login", {
            method: "POST",
            // mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          })
            .then((r) => r.json())
            .then((json) => console.log(json));
    }

    return (
        <div id="login">
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" id="otherusername" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <button type="submit">submit</button>

        </form>
        </div>
    )
}

export default Login