import React from 'react';
import CelebrateSection from '../../components/celebratesection';
import ContactSection from '../../components/contactSection';
import GiftSection from '../../components/giftsection';
import Header from '../../components/header';
import HeroSection from '../../components/herosection';
import NewSection from '../../components/newSection';


const App:React.FC = ()=>{
  return(
    <>
      <Header/>
      <main>
        <HeroSection id={'home'}/>
        <CelebrateSection id={'celebrate'}/>
        <GiftSection id={'gifts'}/>
        <NewSection id ={'new'}/>
        <ContactSection id={'contact'}/>
      </main>
    </>
  )
}

export default App;