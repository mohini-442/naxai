
import './App.css';
import Aihome from './components/Aihome';
import Backtotop from './components/Backtotop';
import Blockchain from './components/Blockchain';
import Loader from './components/Loader';
import Myfooter from './components/Myfooter';
import Myheader from './components/Myheader';
import Nexai from './components/Nexai';
import Roadmap from './components/Roadmap';
import Slidersection from './components/Slidesection';
import Talkus from './components/Talkus';
import Uniquefeatures from './components/Uniquefeatures';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div className='bg-[#040505] overflow-hidden'>
        <Loader/>
        <Myheader />
        <Aihome />
        <Uniquefeatures />
        <Blockchain />
        <Slidersection />
        <Nexai />
        <Roadmap />
        <Talkus />
        <Myfooter />
        <Backtotop/>
      </div>
    </>
  );
}

export default App;
