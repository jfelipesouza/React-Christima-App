import React from 'react';
import { CardContainer, CardDescrition, CardImage, CardImageContainer, CardTitle } from './styled';

type CardProps = {
  id?:string,
  descrition?:string,
  image?:string,
  title?:string,
}


const Card: React.FC<CardProps> = ({id,descrition,image,title}) => {
  return (
    <CardContainer id = {id}>
      <CardImageContainer>
        <CardImage src={image} alt={title} />
      </CardImageContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescrition>{descrition}</CardDescrition>
    </CardContainer>
  );
}

export default Card;
