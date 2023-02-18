import About_Me from "../components/About-me";
import Contact_me from "../components/Contact-me";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills/index";

const Home = () => {
  return (
    <>
      <Header />
      <About_Me />
      <Projects />
      <Skills />
      <Contact_me />
    </>
  );
};

export default Home;
