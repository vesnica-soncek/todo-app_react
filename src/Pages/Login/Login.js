import React, {useEffect, useState} from "react";
import Heading from "../../Components/Heading/Heading";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import sha256 from 'crypto-js/sha256';

const Login = () => {
    const [user, setUser] = useState([]);
    const getUser = (email, password) => {
        console.log("Getting user");
        console.log(email, sha256(password).toString());
        const url = process.env.REACT_APP_API_URL+"/users?"+new URLSearchParams({email: email, password: sha256(password)});
        fetch(url, {
            method: 'GET',
            headers: {
                "X-SILO-KEY": process.env.REACT_APP_API_KEY
            },
        }).then(res => res.json()).then(data => {
            console.log(data);
            setUser(data[0]);
            localStorage.setItem("user_id", data[0].id);
            localStorage.setItem("user", data[0].email);

        }).catch(err => console.log(err));
    }
    useEffect(() => {
        if(localStorage.getItem("user_id")) window.location.href = "/";
    });
    if(user.length > 0) return (
        <div className="container">
            <div className="row">
                <Heading title="Logged in"/>
            </div>
        </div>
    );
    return (
        <div className="container">
            <div className="row">
                <Heading title="Login"/>
                <Button title="Login" action={() => getUser(document.getElementById("email").value, document.getElementById("password").value)}/>

                <Form>
                    <Input id="email" title="Email"/>
                    <Input id="password" title="Password"/>
                </Form>
            </div>
        </div>

    )
}

export default Login;