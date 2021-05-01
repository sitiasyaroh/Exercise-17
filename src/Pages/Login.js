import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
    console.log("button di click dengan function tambahan");

  console.log(name);
  return (
    <div className="App">
      <div><h2>Login</h2></div>
      <br></br>
      <div>
        <p>Username</p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
      <br></br>
      <div>
        <button
          onClick={() =>
            alert(
              `Halo ${name} Selamat anda berhasil login :)`
            )
          }
        >
          Login
        </button>
      </div>

    </div>
  );
};

export default Login;