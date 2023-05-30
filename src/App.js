import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import { Contact } from './contact/contact';



function App() {
  return (
    <>
<Header/>
<Home/>
<Login/>
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
