import axios from "axios";
import "../../App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  // ✅ 아이디 중복확인
  async function handleCheckName() {
    if (!name.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }

    try {
      const res = await axios.get("http://localhost:8080/checkName", {
        params: { name },
        withCredentials: true,
      });

      alert(res.data); // "사용 가능한 아이디입니다."
    } catch (error) {
      const msg =
        typeof error.response.data === "string"
          ? error.response.data
          : error.response.data.message || "중복확인 중 오류가 발생했습니다.";
      alert(msg); // "이미 사용 중인 아이디입니다."
    }
  }

  // ✅ 회원가입
  async function handleJoin() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("pass", pass);

    try {
      const res = await axios.post("http://localhost:8080/join", formData, {
        withCredentials: true,
      });
      alert(res.data);
    } catch (error) {
      const msg =
        typeof error.response.data === "string"
          ? error.response.data
          : error.response.data.message || "회원가입 중 오류 발생";
      alert(msg);
    }
  }

  return (
    <main className={"wrapper"}>
      <div className={"box"}>
        <div className={"input-group"}>
          <label>ID</label>
          <input onChange={(e) => setName(e.target.value)} value={name} />
          <button onClick={handleCheckName}>중복확인</button>
        </div>

        <div className={"input-group"}>
          <label>PASS</label>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>

        <div className={"button-group"}>
          <button onClick={handleJoin}>Register</button>
        </div>
      </div>
    </main>
  );
}

export default App;
