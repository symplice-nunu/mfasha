import React from "react";
import Login from "./Pages/Login";
import NotFound from './Pages/404'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PageLayout from "./Components/PageLayout";
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route element={<PageLayout />}>
    <Route path="/" element={<Login />} />
    <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
