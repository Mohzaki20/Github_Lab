import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

// import Card from './components/Card/Card';
// import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/navbar';
// import Skills from './components/Skills/Skills';
// import Slider from './components/Slider/Slider';
// import About from './about/About';
import { Contact } from './contact/contact';


function App() {
  return (
    <>
<Header/>
<Home/>
<Footer/>
=======
    {/* <Navbar/>
    <Slider/> */}
    <Contact/>
    {/* <Skills width="50%" name="Html"/>
    <Skills width="70%" name="Css"/>
    <Skills width="80%" name="JavaScript"/>
    .<div class="container1">
    <Card color="blue"/>
    <Card color="yellow"/>
    <Card color="green"/>
    <Card color="black"/>
    </div>
    <Footer/> */}
    </>
  )
}

export default App;
