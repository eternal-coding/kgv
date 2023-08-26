import Landing from "./Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home(){
    return(
        <section id='home'>
           <Navbar />
           <Landing />
           <Projects />
           <Footer />
        </section>
    )
}
