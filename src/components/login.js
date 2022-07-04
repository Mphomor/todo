
import React,{useState} from "react";
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import "../css/add.css"






function Login () {


const [email, setEmail] = useState ('');
const [password, setPassword] = useState('');

let history = useHistory();

const login = (()=>{
    history.push('/home');



})



return (
    <div className="container">

        <h1>Login</h1><br></br>

        <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />



        <button id="btn1" onClick={login}>Login</button><br></br>

        <span>Don't have an account</span>
        <span>
            <Link to="/sign-up"> Create account here!</Link>
        </span>
    </div>
)

}





export default Login;