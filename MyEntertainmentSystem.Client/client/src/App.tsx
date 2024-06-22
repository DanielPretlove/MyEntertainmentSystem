import './App.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Hobbies from './pages/Hobbies/Hobbies';
import { useState } from 'react';




export default function App() {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!isActive);
  };
  return (
    <div className="App">
      <div className='overlay' onClick={toggleMenu}>
        <BrowserRouter>
          <Header isActive={isActive} toggleMenu={toggleMenu} />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
          </PageWrapper>
        </BrowserRouter>
      </div>
    </div>
  );
}