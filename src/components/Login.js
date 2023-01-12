import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import '../styles/Login.css';

function Login() {

    let history=useHistory();

    const adminUser={
        email:"login@gmail.com",
        password:"login123"
    }

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    })


   
const handleInput=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value)

    setUser({...user,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(adminUser.email===user.email &&
        adminUser.password===user.password){
        //    return(<Redirect to="/inner" />) 
        history.push("/inner");
        }else{
            alert("wrong credentials")
        }
}

    return (
        <div className="Login">
      

         <div className="mainConatiner">
         <h4>this is a login component</h4>
            <div class="ui inverted segment">
            <form class="ui inverted form"
            onSubmit={handleSubmit}
            >
            <div class="equal width fields">
            <div class="field">
            <label>First name</label>
            <div class="ui fluid input">
            <input type="text" placeholder="First name"
               onChange={handleInput}
            name="username"
            value={user.username}
            />
            </div>
            </div>
            <div class="field">
                <label>Email</label>
                <div class="ui fluid input">
                <input type="text" placeholder="Last name"
                onChange={handleInput}
                name='email'
                value={user.email}
                />
                </div>
                </div>
                </div>
                <div class="field">
                <label>Password</label>
                <div class="ui fluid input">
                <input required type="password" placeholder="password"
                  onChange={handleInput}
               name='password'
                value={user.password}
                />
                </div>
                </div>
                <button type="submit" class="ui button">Submit</button>
                </form>
                </div>
             </div> {/* main container*/ }
        </div>
    )
}

export default Login
