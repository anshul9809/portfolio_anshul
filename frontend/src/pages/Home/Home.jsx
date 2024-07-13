import Navbar from "../../components/Navbar/Navbar";
import Hero from '../../components/Hero/Hero';
import Timeline from '../../components/Timeline/Timeline';
import Projects from '../../components/Projects/Projects';
import Skills from "../../components/Skills/Skills";
import Softwares from "../../components/SoftwareApplications/Softwares";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Home() {

  return (
    <>
        <section className='section'>
          <Navbar />
          <Hero />
        </section>
        <section className='section'><Timeline /></section>
        <section className='section'><Projects /></section>
        <section className='section'><Skills /></section>
        <section className='section'><Softwares /></section>
        <section className="section">
          <Contact />
          <Footer />  
        </section>
      </>
  )
}

export default Home;
