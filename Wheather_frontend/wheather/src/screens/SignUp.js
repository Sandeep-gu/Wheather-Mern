import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function SignUp() {
    const [credentials,setCredentials] = useState({name:"",email:"",password:"",geolocation:""})

    
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
            
          });
          const json = await response.json();
          console.log(json);
          if(!json.success){
            alert("Error valid  Credentials")
          }
          

    };
    
  return (
    <div>
  
    <div className="container mt-3">
        <form onSubmit = {handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value = {credentials.name} onChange={onChange}/>

            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value = {credentials.email} onChange={onChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value = {credentials.password} onChange={onChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" name='geolocation' value = {credentials.geolocation} onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link className="m-3" to='/login'>I have already Account</Link>
        </form>
    </div>
    </div>
  )
}
