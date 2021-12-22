import React from 'react';
import {
  CelebrateButton,
  CelebrateContainer,
  CelebrateSubTitle,
  CelebrateTitle,
  Image,
  LeftContainer,
  RigthContainer
} from './styled';
import Celebrate from '../../assets/img/celebrate.png';
import { SectionProps } from '../../@types/section';



const CelebrateSection:React.FC<SectionProps> = ({id}) => {
  return(
    <CelebrateContainer id={id} >
      <LeftContainer>
        <CelebrateTitle>
          Comemore com muito amor
        </CelebrateTitle>
        <CelebrateSubTitle>
        Nestes feriados, festeje com muito amor e paz, oferecendo muitas bênçãos aos vossos entes queridos, amigos e vizinhos, desejando-lhes um bom recado de Natal.
        </CelebrateSubTitle>
        <CelebrateButton href='#celebrate' >Envie bons votos</CelebrateButton>
      </LeftContainer>
      <RigthContainer>
        <Image src={Celebrate} alt={'lalaeira de natal'} />
      </RigthContainer>
    </CelebrateContainer>
  )
}

export default CelebrateSection;
