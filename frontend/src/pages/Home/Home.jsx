import Navbar from "../../components/Navbar/Navbar";
import Hero from '../../components/Hero/Hero';
import Timeline from '../../components/Timeline/Timeline';
import Projects from '../../components/Projects/Projects';
import Skills from "../../components/Skills/Skills";
// import Softwares from "../../components/SoftwareApplications/Softwares";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import { getUser } from "../../redux/slices/userSlice";
import { getSkill } from "../../redux/slices/skillsSlice";
import { getProject } from "../../redux/slices/projectSlice";
import { getTimeline } from "../../redux/slices/timelineSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";

function Home() {
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

  if(userLoading || skillLoading || projectLoading || timelineLoading) return <Loader />;

  return (
    <>
        <section className='section' id="Home">
          <Navbar />
          <Hero />
        </section>
        <section className="section" id="About"><About /></section>
        <section className='section' id="Experience"><Timeline /></section>
        <section className='section' id="Project"><Projects /></section>
        <section className='section' id="Skill"><Skills /></section>
        {/* <section className='section'><Softwares /></section> */}
        <section className="section" id="Contact">
          <Contact />
          <Footer />  
        </section>
      </>
  )
}

export default Home;
