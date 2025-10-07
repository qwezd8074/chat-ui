import axios from "axios";
import "../../App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  // 비번 검증 결과 상태
  const [pwOk, setPwOk] = useState(false);
  const [pwMsg, setPwMsg] = useState("");

  // ✅ 비번 실시간 확인 (버튼 없음, 디바운스 300ms)
  useEffect(() => {
    if (!pass || !confirm) {
      setPwOk(false);
      setPwMsg("");
      return;
    }

    const controller = new AbortController();
    const t = setTimeout(async () => {
      try {
        const form = new FormData();
        form.append("pass", pass);
        form.append("confirm", confirm);

        const res = await axios.post(
          "http://localhost:8080/validatePassword",
          form,
          { withCredentials: true, signal: controller.signal },
        );

        setPwOk(true);
        setPwMsg(
          typeof res.data === "string"
            ? res.data
            : "사용 가능한 비밀번호입니다.",
        );
      } catch (error) {
        const msg =
          typeof error.response?.data === "string"
            ? error.response.data
            : error.response?.data?.message ||
              "비밀번호 확인 중 오류가 발생했습니다.";
        setPwOk(false);
        setPwMsg(msg);
      }
    }, 300);

    return () => {
      controller.abort();
      clearTimeout(t);
    };
  }, [pass, confirm]);

  // ✅ 아이디 중복확인(기존)
  async function handleCheckName() {
    if (!name.trim()) return alert("아이디를 입력해주세요.");
    try {
      const res = await axios.get("http://localhost:8080/checkName", {
        params: { name },
        withCredentials: true,
      });
      alert(res.data);
    } catch (error) {
      const msg =
        typeof error.response?.data === "string"
          ? error.response.data
          : error.response?.data?.message || "중복확인 중 오류가 발생했습니다.";
      alert(msg);
    }
  }

  // ✅ 회원가입
  async function handleJoin() {
    if (!pwOk) {
      alert(pwMsg || "비밀번호 확인을 완료해주세요.");
      return;
    }

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
        typeof error.response?.data === "string"
          ? error.response.data
          : error.response?.data?.message || "회원가입 중 오류 발생";
      alert(msg);
    }
  }

  return (
    <main className={"wrapper"}>
      <div className={"box"}>
        <div className={"input-group"}>
          <label>ID</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleCheckName}>중복확인</button>
        </div>

        <div className={"input-group"}>
          <label>PASS</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div className={"input-group"}>
          <label>CONFIRM</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {pwMsg && (
            <small style={{ color: pwOk ? "green" : "red" }}>{pwMsg}</small>
          )}
        </div>

        <div className={"button-group"}>
          <button onClick={handleJoin}>Register</button>
        </div>
      </div>
    </main>
  );
}

export default App;
