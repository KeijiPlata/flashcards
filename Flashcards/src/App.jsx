import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Flashcardspage from "./pages/Flashcardspage"

function App() {
  return (
  <BrowserRouter>
     <Routes>
        <Route path="/flashcards/" element={<Flashcardspage />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App