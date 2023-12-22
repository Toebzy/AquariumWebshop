import { useState, useContext } from "react";
import facade from "../util/apiFacade";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState(null);
  const handleRegister = () => {
    event.preventDefault();
    facade.register(
      username,
      password,
      () => {
        // Registration successful, you can redirect or handle it as needed
        console.log("Registration successful");
      },
      () => {
        setRegisterError("Failed during registration")
        console.log("Registration failed");
      }
    );
  };

  return (
    <div className="register-container">
    <div className="content">
      <form className="register-form">
        <h2 className="register-form-header">Sign up here</h2>
          <div className="register-labels">
          <label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
          </div>
        <br />
        <button onClick={handleRegister}>Register</button>
        {registerError && <div className="loginError">{registerError}</div>} 
      </form>
      </div>
    </div>
  );
};

export default RegisterPage;