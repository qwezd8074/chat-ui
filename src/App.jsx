import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin() {
    // TODO: 로그인 요청 로직 구현 필요
    alert("로그인")
  }
  
  useEffect(()=>{
    console.log(id);
  }, [id])

  useEffect(()=>{
   console.log(pass);
  }, [pass])

  return (
<div>

  id: <input onChange={(e)=>{setId(e.target.value)}}></input>
  <br></br>
  pass: <input onChange={(e)=>{setPass(e.target.value)}}></input>
  <br></br>
  <button onClick={login}>login</button>
</div>
  )
}

export default App;
