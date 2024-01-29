"use client";
import {useState} from 'react'
import {useRouter} from 'next/router'

function Loginpage() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const router = useRouter();
     const handleLogin = async(e:any)=>{
          e.preventDefault();
            const res =  fetch('https://fakestoreapi.com/auth/login',{
                 method:'POST',
                 headers:{
                        'Content-Type':'application/json'
                 },
                 body:JSON.stringify({
                        username,
                        password
                 })
            }).then(res=>{
                if(res.ok){

                   return res.json()
                   
                }
            }) .then(json=>{
                console.log(json)
                if(json){
                    localStorage.setItem('token' , json.token)
                    router.push('/home')
                }
            }).catch(err=>console.log(err))
            

     }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <label>Username</label>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <label>Password</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Loginpage