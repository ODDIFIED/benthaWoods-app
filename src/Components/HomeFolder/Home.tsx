import MenuFilter from "./MenuFilter";
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
          <Navbar />
      </div>
      <div className="w-full max-w-full mx-auto">
        <Hero />
        <MenuFilter/>
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
