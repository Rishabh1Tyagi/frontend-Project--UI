import React from "react";
import { Route, Routes } from 'react-router-dom';

import MainHeader from "./components/MainHeader";
import Welcome from "./Pages/Welcome";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
