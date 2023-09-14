import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [credentials,setCredentials] = useState({email:"",password:""})

    const navigate = useNavigate();
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/loginuser',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({email:credentials.email,password:credentials.password})
            
          });
          const json = await response.json();
          console.log(json);
          if(!json.success){
            alert("Error valid  Credentials")
          }
          if(json.success){
            console.log(json.authToken)
            localStorage.setItem('userEmail',credentials.email)
            localStorage.setItem('authToken',json.authToken)
            alert("Sucessfully Login");

            navigate("/wheather")
          }
          

    };
    
  return (
    <div>
   
    <div className="container mt-5">
    <form onSubmit = {handleSubmit}>
            
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value = {credentials.email} onChange={onChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value = {credentials.password} onChange={onChange}/>
            </div>

           
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link className="m-3" to = '/signup' >I am new User</Link>
        </form>
        </div>
    </div>
  )
}

export default Login