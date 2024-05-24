import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import HomePage from "./pages/HomePage";
import DetectPage from "./pages/DetectPage";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3 mg-top">
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
          </Routes>
          <Routes>
            <Route path="/detect" element={<DetectPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
