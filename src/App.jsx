import { Routes, Route, Link } from "react-router-dom";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import NotFound from "./pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <div>
      {/* 테스트용 네비 */}
      <nav style={{ display: "flex", gap: 12, padding: 12 }}>
        <button>
          <Link to="/signin">회원가입</Link>
        </button>
        <button>
          <Link to="/signup">로그인</Link>
        </button>
      </nav>

      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
