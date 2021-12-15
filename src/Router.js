import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loginhaesoo from './pages/haesoo/Login/Login';
import Mainhaesoo from './pages/haesoo/Main/Main';

import Loginmu from './pages/mu/Login/Login';
import Mainmu from './pages/mu/Main/Main';

import Loginq from './pages/q/Login/Login';
import Mainq from './pages/q/Main/Main';

import Loginsangil from './pages/sangil/Login/Login';
import Mainsangil from './pages/sangil/Main/Main';

import Footer from './components/Footer/Footer';
// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        // haesoo
        <Route path="/login-haesoo" element={<Loginhaesoo />} />
        <Route path="/main-haesoo" element={<Mainhaesoo />} />
        // sangil
        <Route path="/login-sangil" element={<Loginsangil />} />
        <Route path="/main-sangil" element={<Mainsangil />} />
        // mu
        <Route path="/login-mu" element={<Loginmu />} />
        <Route path="/main-mu" element={<Mainmu />} />
        // Q
        <Route path="/login-q" element={<Loginq />} />
        <Route path="/main-q" element={<Mainq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
