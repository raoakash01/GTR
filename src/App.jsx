import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Career from './components/career';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
}

export default App;
