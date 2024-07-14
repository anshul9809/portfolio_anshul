import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import ViewProject from "./pages/ViewProject/ViewProject";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ()=>{



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-project/:id" element={<ViewProject />} />
      </Routes>
      <ToastContainer position="top-right" theme="dark"/>
    </BrowserRouter>
  );
}

export default App;