import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <div>
            <Menu />
            <Blog />
            <Contact />
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
