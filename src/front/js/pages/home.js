import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const token = store.token
	const message = store.message
	console.log(token)
	useEffect(()=>{
        actions.getMessage();
    },[token])
	
	return (
		<div className="text-center mt-5">
		{token && token !="" && token != undefined ? <h1>You are logged in with token: {token}</h1> : <h1>Bienvenido, porfavor inicia sesión o registrate</h1>}
		{message && message !="" && message!=undefined ? <div className="alert alert-info">{message}</div> : <div className="alert alert-info">Si estas logeado podras ver la sección secreta</div>}	
		</div>	
		
	);
};
