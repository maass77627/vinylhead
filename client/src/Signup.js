import { useState } from "react";

function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e) {
        
        e.preventDefault()
        console.log(password)
        console.log(username)
        fetch('/signup', {
            method: "POST",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                username,
                password,
                passwordConfirmation: passwordConfirmation

            })

        })
        .then((response) => response.json())
        .then((json) => console.log(json))

    }

    

return (
    <div>
        <form id="signupform" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input><br></br>
            <button type="submit">Submit</button>
        </form>

    </div>
)

}

export default Signup