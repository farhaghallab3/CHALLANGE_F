import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstrumentPage from './pages/InstrumentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instrument/:id" element={<InstrumentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
