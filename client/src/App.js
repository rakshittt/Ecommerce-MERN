import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contactus from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import RegisterPage from "./pages/Auth/Register";
import LoginPage from "./pages/Auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contactus />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
