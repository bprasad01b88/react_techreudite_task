import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Process from "./components/Process/Process";
import Service from "./components/Services/Service";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Service />
      <About />
      <Process />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
