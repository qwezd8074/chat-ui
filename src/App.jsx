import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  async function handleLogin() {
    // TODO: 로그인 요청 로직 구현 필요
    const formData = new FormData();
    formData.append("name", name);
    formData.append("pass", pass);

    await axios
      .post("http://localhost:8080/login", formData, {
        withCredentials: true, // 쿠키를 함께 보내도록 설정
      })
      .then((response) => {
        // response 안에 데이터가 들어있음
        console.log(response.data); // 실제 응답 데이터
        alert(response.data);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
        alert(error.response.data);
      });
  }

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(pass);
  }, [pass]);

  return (
    <main className={"wrapper"}>
      <div className={"box"}>
        <div className={"input-group"}>
          <label>ID</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={"input-group"}>
          <label>PASS</label>
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <div className={"button-group"}>
          <button onClick={handleLogin}>login</button>
        </div>
      </div>
    </main>
  );
}

export default App;
