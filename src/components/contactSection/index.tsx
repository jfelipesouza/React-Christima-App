import React from 'react';
import Message from '../../assets/img/message.png'
import {SectionProps} from '../../@types/section';
import {
  ContactButton,
  ContactContainer, 
  ContactContent, 
  ContactImage, 
  ContactMessage, 
  ContactTitle, 
  LeftContainer, 
  RigthContainer,
} from './styled';



const ContactSection: React.FC<SectionProps> = ({id}) => {
  return(
    <ContactContainer id ={id} >
      <ContactContent>


        <LeftContainer>
          <ContactTitle>Neste natal envie suas melhores intenções</ContactTitle>
          <ContactMessage placeholder='Envie a sua mensagem...' maxLength={180} />
          <ContactButton>Enviar</ContactButton>
        </LeftContainer>

        <RigthContainer>
          <ContactImage src={Message} alt='cartão de natal'/>
        </RigthContainer>

      </ContactContent>

    </ContactContainer>
  );
}

export default ContactSection;