import React, { useState } from "react";

const Register = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [nama, setNama] = useState("");
    console.log("button di click dengan function tambahan");

console.log(email);
return (
    <div className="App">
    <div><h2>Register</h2></div>
    <br></br>
    <div>
        <p>E-mail</p>
        <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
    </div>
    <div>
        <p>Password</p>
        <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
    </div>
    <div>
        <p>Nama</p>
        <input
        type="text"
        value={nama}
        onChange={(event) => setNama(event.target.value)}
        />
    </div>
    <br></br>
    <div>
        <button
        onClick={() =>
            alert(
            `Halo ${email} Register anda berhasil telah berhasil :)`
            )
        }
        >
        Register
        </button>
    </div>
        
    </div>
);
};

export default Register;