import React, {useState} from 'react'
import "./Login.css"
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'


const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("");

    const dispatch=useDispatch()

const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(login({
        name: name,    
        email: email,
        phone: phone,
        password: password,
        loggedIn: true,
    })
    );
};


//

  return (
    <div className='login'>
    <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
      <h1>Login</h1>
      <input type="name" placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="Phone" placeholder='Phone' required value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit' className='submitBtn'>Submit</button>
    </form>

  </div>
  )
}

export default Login