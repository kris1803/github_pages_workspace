// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';
import HardSkills from "./pages/HardSkills";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import About from "./pages/About";
import SeeProject from './pages/SeeProject.tsx';

import { ReactGA } from "./index";


function App() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    reportWebVitals(({ id, name, value }) =>
      ReactGA.event({
        action: name,
        category: 'Web Vitals',
        label: id,
        nonInteraction: true,
        value: typeof value === 'number'? Math.round(value) : value,
      })
    );
  }, []);

  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/hard-skills' element={<HardSkills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/project/:id' element={<SeeProject />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
