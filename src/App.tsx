import "swiper/css";
import "swiper/css/navigation";
import Home from './pages/Home';
import UberUns from './pages/UberUns';
import AiSolutions from './pages/AiSolutions';
import Brandschutz from './pages/Brandschutz';
import BuldingCleaning from './pages/BuldingCleaning';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gebaudereinigung" element={<BuldingCleaning />} />
          <Route path="/ai-solutions" element={<AiSolutions />} />
          <Route path="/brandschutz" element={<Brandschutz />} />
          <Route path="/uber-uns" element={<UberUns />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;