
import Navbar from './components/Navbar';
import { Route, Routes} from 'react-router-dom';

import About from './pages/About';
import InfoClasses from './pages/InfoClasses';
import MainContent from './pages/MainContent';
import PrivateEvents from './pages/PrivateEvents';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/InfoClasses' element={<InfoClasses />} />
        <Route path='/PrivateEvents' element={<PrivateEvents />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
