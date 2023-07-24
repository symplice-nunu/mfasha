import React from "react";
import Login from "./Pages/Login";
import NotFound from './Pages/404'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PageLayout from "./Components/PageLayout";
import Dashboard from "./Pages/Dashboard";
import Doctor from "./Pages/Doctor";
import GeneralDirector from "./Pages/GeneralDirector";
import Nurse from "./Pages/Nurse";
import Patient from "./Pages/Patient";
import Roles from "./Pages/Roles";
import Users from "./Pages/Users";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PageLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard /> } />
          <Route path="/doctor" element={<Doctor /> } />
          <Route path="/dg" element={<GeneralDirector /> } />
          <Route path="/nurse" element={<Nurse /> } />
          <Route path="/patient" element={<Patient /> } />
          <Route path="/roles" element={<Roles /> } />
          <Route path="/users" element={<Users /> } />
        </Route>
      </Routes>
  </BrowserRouter> 
  );
}

export default App;
