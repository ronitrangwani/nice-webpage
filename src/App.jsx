import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Courses from "./components/CourseSection/Courses";
import BootSection from "./components/BootcampSection/BootSection";
import Header from "./components/Head/Header";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".three-ticks-inner");

    const observer = new IntersectionObserver((entries) =>
      entries.forEach(
        (entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        },
        {
          threshold: 1,
        }
      )
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Courses />
      <BootSection />
      <Footer />
    </div>
  );
};

export default App;
