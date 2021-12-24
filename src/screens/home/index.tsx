import React, { useContext } from 'react';
import CelebrateSection from '../../components/celebratesection';
import ContactSection from '../../components/contactSection';
import Footer from '../../components/footer';
import GiftSection from '../../components/giftsection';
import Header from '../../components/header';
import HeroSection from '../../components/herosection';
import NewSection from '../../components/newSection';
import Sidebar from '../../components/sidebar';
import { Context } from '../../services/context';


const App:React.FC = ()=>{
  const {open,setOpen} =useContext(Context);

  return(
    <div onClick={open===true?()=>setOpen(false):()=>{}} >
      <Header/>
      <main>
        <HeroSection id={'home'}/>
        <CelebrateSection id={'celebrate'}/>
        <GiftSection id={'gifts'}/>
        <NewSection id ={'new'}/>
        <ContactSection id={'contact'}/>
      </main>
      <Footer/>
      <Sidebar/>
    </div>
  )
}

export default App;