import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Overview from './pages/Overview/Overview';
import CDC from './pages/CDC/CDC';
import Recruit from './pages/Recruit/Recruit';
import Message from './pages/Message/Message';
import Degree from './pages/Degree/Degree';
import RecruitmentProcess from './pages/RecruitmentProcess/RecruitmentProcess';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index={true} element={<Hero />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/CDC" element={<CDC />} />
        <Route path="/Recruit" element={<Recruit />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Degree" element={<Degree />} />
        <Route path="/RecruitmentProcess" element={<RecruitmentProcess />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
