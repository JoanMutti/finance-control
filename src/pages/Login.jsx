import React, { useState } from "react";
import Input from "../components/Input";
import { useAuth } from "../hooks/useAuth";
import "../styles/Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signIn(email, password);
  };

  return (
    <div className="Login">
      <div>
        <div className="Login_text">
          <h1>Finance Control</h1>
          <p>"If you have your finances in order, you'll achieve all yours dreams"</p>
        </div>
      </div>
      <form className="Login_form" onSubmit={handleSubmit}>
        <Input value={email} handleChange={setEmail} type="email" placeholder="Mail" title="Mail" />
        <Input value={password} handleChange={setPassword} type="password" placeholder="Contraseña" title="Contraseña" />
        <input type="submit" value="Ingresar" />
      </form>
    </div>
  );
};

export default Login;
