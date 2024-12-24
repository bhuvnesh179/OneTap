import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Otp } from "./pages/Otp"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<Otp />} />

        </Routes>
      </BrowserRouter>
    </>
  ) 
}

export default App  
