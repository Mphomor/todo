import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'



function SingUp(){



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    let history = useHistory();

    const Register = ()=>{
        history.push('/home')

    }

return (

    <div className="container">

        <h1>Register account here</h1>

        
        <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
        
        <button   onClick={Register}>Sign up</button>
    </div>
)



}









export default SingUp;