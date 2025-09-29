import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthRoutes from "./AuthRoutes"
import ChatRoutes from "./ChatRoutes"
import NotFound from "../pages/NotFound"

export default function AppRouter(){
  return (
    <BrowserRouter>
      <Routes>
        <AuthRoutes/>
        <ChatRoutes/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
