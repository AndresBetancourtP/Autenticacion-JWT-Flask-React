import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Nuevo estado para manejar errores
  const history = useNavigate();

  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Corrección: 'aplication' -> 'application'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    };

    fetch("https://3001-andresbetan-autenticaci-i8a71wminkb.ws-us93.gitpod.io/api/token", opts)
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          throw new Error("Ha habido un error"); // Se lanza un error si la respuesta no es exitosa
        }
      })
      .then(token => {
        actions.setToken(token);
        history("/dashboard");
      })
      .catch(error => {
        console.error("Hay un error!!", error);
        setError("Ha ocurrido un error al autenticar"); // Se actualiza el estado de error
      });
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {store.token && store.token !== "" && store.token !== undefined ? (
        <div>Tu estás logueado con este token {store.token}</div>
      ) : (
        <div>
          <br />
          <label>Ingrese su correo:</label>&nbsp;
          <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <br />
          <br />
          <label>Ingrese su clave:</label>&nbsp;
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <br />
          <br />
          <button onClick={handleClick}>Entrar</button>
          {error && <div className="error">{error}</div>} {/* Se muestra el mensaje de error si existe */}
        </div>
      )}
    </div>
  );
};
