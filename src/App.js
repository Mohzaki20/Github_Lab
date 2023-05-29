import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/Skills";
import Slider from "./components/Slider/Slider";
import About from "./components/about/About";
import Product from "./product";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Skills width="50%" name="Html" />
      <Skills width="70%" name="Css" />
      <Skills width="80%" name="JavaScript" />.
      <div class="container1">
        <Card color="blue" />
        <Card color="yellow" />
        <Card color="green" />
        <Card color="black" />
      </div>
      <Footer />
    </>
  );
}

export default App;
