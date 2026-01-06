import { Routes, Route, useLocation  } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './App5.css';
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
  );
}

export default App;