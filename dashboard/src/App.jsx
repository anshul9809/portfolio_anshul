import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ManageSkills from "./pages/ManageSkills";
import ManageTimelines from "./pages/ManageTimelines";
import ManageProjects from "./pages/ManageProjects";
import ViewProject from "./pages/ViewProject";
import UpdateProject from "./pages/UpdateProject";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ()=>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/forgot-password/reset/:token" element={<ResetPassword />}/>
          <Route path="/manage/skills" element={<ManageSkills />}/>
          <Route path="/manage/timelines" element={<ManageTimelines />}/>
          <Route path="/manage/projects" element={<ManageProjects />}/>
          <Route path="/view/project/:id" element={<ViewProject />}/>
          <Route path="/update/project/:id" element={<UpdateProject />}/>
        </Routes>
        <ToastContainer position="bottom-right" theme="dark" />
      </BrowserRouter>
    </>
  );
}

export default App;