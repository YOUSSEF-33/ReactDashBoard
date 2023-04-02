import "./login.scss"
import {makeStyles, TextField} from '@mui/material'                         
import { useContext, useState } from "react"
import {auth} from '../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = (params) => {

   const [error, setError] = useState(false)
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const navigate  = useNavigate()
   const {dispatch} = useContext(AuthContext);

    const handleLogin = (e)=>{
       e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
          const user = userCredential.user;
          //console.log(email, password);
          navigate('/')
          dispatch({type: "LOGIN", payload: user})
      })
      .catch((error)=>{
        setError(true)
      })
    }
   
    
  return (
    <div className="container">
      <form className="form" onSubmit={handleLogin}>
        <h1>LOGIN</h1>
           <input type="email" placeholder="user name" onChange={(e)=>{setEmail(e.target.value)}} />
           <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
           <button type="submit" >LOGIN</button>
           {error && <span className="wrongMessage">email or password is wrong ! </span>}
           <p>Aren't you have an account? <a href="#">sign up</a> </p>
      </form>
    </div>
  )
}

export default Login