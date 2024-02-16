
import './App.css';
import Aihome from './components/Aihome';
import Blockchain from './components/Blockchain';
import Myfooter from './components/Myfooter';
import Myheader from './components/Myheader';
import Nexai from './components/Nexai';
import Roadmap from './components/Roadmap';
import Slidersection from './components/Slidesection';
import Talkus from './components/Talkus';
import Uniquefeatures from './components/Uniquefeatures';


function App() {
  return (
    <>
      <div className='bg-[#040505] overfl ow-hidden'>
        <Myheader />
        <Aihome />
        <Uniquefeatures />
        <Blockchain />
        <Slidersection />
        <Nexai />
        <Roadmap />
        <Talkus />
        <Myfooter />
      </div>
    </>
  );
}

export default App;
