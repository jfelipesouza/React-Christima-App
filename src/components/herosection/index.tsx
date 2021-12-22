import React from 'react';
import {
  Container,
  BottomContainer,
  TopContainer,
  LeftContainer,
  RightContainer,
  Image,
  HeroSectionTitle,
  HeroSectionSubTitle,
  HeroSectionDescrition,
  HeroSectionWhrapper,
  HeroButton,
} from './styled';
import Home from '../../assets/img/home.png';
import Card from '../card';
import { givingCards } from '../../services/givingcards';
import { SectionProps } from '../../@types/section';


const HeroSection: React.FC<SectionProps> = ({id}) => {
  return (
    <Container id={id} >
      <TopContainer>
        <LeftContainer>
            <Image src={Home} alt={'arvore de natal'} />
        </LeftContainer>
        <RightContainer>
          <HeroSectionTitle>Feliz Natal e Próspero Ano Novo !</HeroSectionTitle>
          <HeroSectionDescrition>
            O Natal e um novo ano estão a começar, todos os votos de felicidades e sucessos.
          </HeroSectionDescrition>
          <HeroButton href='#home' >Iniciar</HeroButton>
        </RightContainer>
      </TopContainer>
      <BottomContainer>
        <HeroSectionSubTitle>
          Ofereça neste Natal!
        </HeroSectionSubTitle>
        <HeroSectionWhrapper>

          {givingCards.map((item)=>
            <Card
              id={item.id}
              descrition={item.descrition}
              image={item.image}
              title={item.title}
            />
          )}

        </HeroSectionWhrapper>

      </BottomContainer>
    </Container>
  );
}

export default HeroSection;
