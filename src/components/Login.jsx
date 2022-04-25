import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import axios from "axios";

export const Login = () => {
    //  use reqres to log user in.


    const { handleAuth } = useContext(AuthContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username : "",
        
        password : "",
    })

    const handleChange = (event) =>{
        const { name, value } = event.target;

        setFormData({
            ...formData,

            [name] : value,
        })
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.post("https://reqres.in/api/register",{

            username : formData.username,
            password : formData.password
        })
        .then(function(res){
            console.log(res.data.token);
            handleAuth(res.data.token);

            navigate(-1, {replace : true});
        })
        .catch(function(error){
            alert("Please Enter username as eve.holt@reqres.in and password as pistol")
            console.log(error);
        })
    }
    console.log('formData:', formData)
    return (
      <form onSubmit={handleSubmit} className="loginform">
        <input
            onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
            onChange={handleChange}
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };