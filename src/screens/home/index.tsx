import React from 'react';
import CelebrateSection from '../../components/celebratesection';
import GiftSection from '../../components/giftsection';
import Header from '../../components/header';
import HeroSection from '../../components/herosection';
import NewSection from '../../components/newSection';


const App:React.FC = ()=>{
  return(
    <>
      <Header/>
      <main>
        <HeroSection id='home'/>
        <CelebrateSection id={'celebrate'}/>
        <GiftSection id={'gifts'}/>
        <NewSection id ={'new'}/>
      </main>
    </>
  )
}

export default App;