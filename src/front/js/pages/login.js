import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import {useNavigate} from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    
    // console.log("Este es tu token",store.token);
    const handleClick = ()=>{
         actions.login(email,password);//.then(()=>history("/"));
         history("/");
    };

    // if (store.token && store.token !="" && store.token!=undefined) history("/");

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
            {/* si no es nulo ni esta vacio ni es indefinido */}
            {store.token && store.token !="" && store.token!=undefined  ? ("tu estas logeado con este token "+store.token+": ")
            :(
			<div>
            <br/>
                <label>Ingrese su correo:</label>&nbsp;
                <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} /><br/><br/>
                <label>Ingrese su clave:</label>&nbsp;
                <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
                <button onClick={handleClick}>Entrar</button>
            </div>
            )}
		</div>
	);
};
