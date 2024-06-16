import './App.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import PageWrapper from './components/PageWrapper/PageWrapper';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </div>
  );
}