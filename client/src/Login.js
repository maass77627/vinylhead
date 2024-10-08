// import { useState } from "react"

// function Login() {
//     const [username, setUsername] = useState("")

//     function handleSubmit(e) {
//         e.preventDefault()
//         fetch("http://localhost:3003/login", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username }),
//           })
//             .then((r) => r.json())
//             .then((user) => console.log(user));
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Username:</label>
//             <input type="text" id="otherusername" value={username} onChange={(e) => setUsername(e.target.value)}></input>
//             <button type="submit">submit</button>

//         </form>
//     )
// }

// export default Login