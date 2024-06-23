import './App.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import PageWrapper from './components/PageWrapper/PageWrapper';
import { useContext } from 'react';
import HobbiesAdminPage from './pages/Admin/Hobbies/HobbiesAdminPage/HobbiesAdminPage';
import { NavContext } from './context/Nav/NavContext';




export default function App() {
  const nav = useContext(NavContext);
  return (
    <div className="App">
      <div className={nav.state ? "overlay" : ""} onClick={() => nav.toggleNav()}></div>
        <BrowserRouter>
          <Header />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin-hobbies" element={<HobbiesAdminPage />} />
            </Routes>
          </PageWrapper>
        </BrowserRouter>
    </div>
  );
}