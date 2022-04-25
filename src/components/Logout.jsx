import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

export const Logout = () => {

    const { handleAuth } = useContext(AuthContext);

    const navigate = useNavigate();
    // log user out. it's just an inmemory value in context api
    return <div onClick={() =>{
        console.log(handleAuth);
        handleAuth("");

        navigate("/", {replace : false});
    }}>Logout</div>;
  };