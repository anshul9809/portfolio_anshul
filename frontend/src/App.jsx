import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import ViewProject from "./pages/ViewProject/ViewProject";


const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-project/:id" element={<ViewProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;