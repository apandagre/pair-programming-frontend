import { Route, Routes } from "react-router-dom";
import Playground from "./pages/Playground";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="w-screen bg-[#161616] text-white font-sans selection:bg-[#0f3058]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </div>
  );
}
