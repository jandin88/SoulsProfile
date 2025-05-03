import Header from "../components/Header"
import Hero from "../components/Hero";
import Particles from "../util/particles/Particles"
export default function Home() {
    return (
      <>
      
        <Particles />
        <Header /> 
        <Hero />
        <div id="particles-js" ></div>

     
      </>
    );
  }
  