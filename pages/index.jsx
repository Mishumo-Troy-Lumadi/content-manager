import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Auth({onLogin}) {

  let [email,setEmail] = useState(null)
  let [password,setPasssword] = useState(null)
  let [user, setUser] = useState()
  let router = useRouter()

  useEffect(()=>{
    if(user){

      sessionStorage.setItem('user', user)

      if (sessionStorage.getItem('user')) {
        router.push('./dashboard')
      }
    }else{
      if (sessionStorage.getItem('user')) {
        router.push('./dashboard')
      }
    }
  },[user])

  async function signIn(e){

    e.preventDefault()

    if(email){
      if(password){
      
        await axios.post(`./api/demo/auth/signin`,{email,password}).then((response) => {
            console.log(response.data);
            if(response.data.id){
              setUser(response.data);
            }else{
              throw response.data.error
            }
            
        }).catch((e)=>{
          alert(e)
        })
  
      }
    }

  }


  return (
  <form action="#" onSubmit={signIn}>
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="flex flex-col justify-center items-center bg-white rounded px-7 py-10 text-sm space-y-10">

          <h1 className="text-xl text-purple-700">Sign In</h1>

          <div className="flex flex-col space-y-4 text-slate-600">

            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input autoComplete="current-email" required onChange={(e) => { setEmail(e.target.value) }} className="bg-purple-100 focus:bg-purple-300 rounded px-4 py-2 focus:border-0 focus:outline-none focus:ring-1 focus:ring-purple-700" type="email" id="email" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input autoComplete="current-password" required onChange={(e) => { setPasssword(e.target.value) }} className="bg-purple-100 focus:bg-purple-300 rounded px-4 py-2 focus:border-0 focus:outline-none focus:ring-1 focus:ring-purple-700" type="password" id="pasword" />
            </div>

          </div>

          <button type="submit" className="bg-purple-700 text-white w-full py-2 rounded hover:bg-purple-500">Sign In</button>

        </div>
      </div>
  </form>

    
  );
}
