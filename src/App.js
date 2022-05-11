// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import HardSkills from "./pages/HardSkills";
import Error from "./pages/Error";


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="hard-skills" element={<HardSkills />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
