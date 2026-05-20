import BuldingCleaning from './pages/BuldingCleaning';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gebaudereinigung" element={<BuldingCleaning />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;