import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import ViewProject from "./pages/ViewProject/ViewProject";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/slices/userSlice";
import { getSkill } from "./redux/slices/skillsSlice";
import { getProject } from "./redux/slices/projectSlice";
import { getTimeline } from "./redux/slices/timelineSlice";

const App = ()=>{

  const userLoading = useSelector(state=>state.user.loading);
  const skillLoading = useSelector(state=>state.skills.loading);
  const projectLoading = useSelector(state=>state.project.loading);
  const timelineLoading = useSelector(state=>state.timeline.loading);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
    dispatch(getSkill());
    dispatch(getProject());
    dispatch(getTimeline());
  }, []);

  if(userLoading || skillLoading || projectLoading || timelineLoading) return <div>Loading...</div>;



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