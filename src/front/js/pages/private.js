import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const token = store.token
    const message = store.message


    useEffect(()=>{
        actions.getMessage();
    },[token])
	
	return (
		<div className="text-center mt-5">
        <h1>Sección de contenido oculto</h1>    
		{token && token!="" && token != undefined ? <h1>Secrets exposed</h1> : <h1>Aun no estas logeado, inicia para ver el secreto!</h1>}
        {message && message !="" && message!=undefined ? <div className="alert alert-info">{message}</div> : <div className="alert alert-info">Si estas logeado podras ver la sección secreta</div>}
      
		</div>	
	);
};
