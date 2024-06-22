import './App.css';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login/Login';
 



function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/password-forgot" element={<h1>passwword forgot</h1>} />
        <Route path="/password-reset" element={<h1>passwword forgot</h1>} />
        <Route path="/manage/skills" element={<h1>Manage Skills</h1>} />
        <Route path="/manage/timeline" element={<h1>Manage timeline</h1>} />
        <Route path="/manage/projects" element={<h1>Manage Project</h1>} />
        <Route path="/view/project/:id" element={<h1>Manage single project</h1>} />
        <Route path="/update/project/:id" element={<h1>Update projct</h1>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer position="bottom-right" theme="dark" />
  </>
}

export default App;
