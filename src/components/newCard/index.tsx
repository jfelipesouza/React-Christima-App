import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { 
  CardContainer, 
  CardDescrition, 
  CardImage, 
  CardImageContainer,
  CardPrice,
  CardTextContainer,
  IconZone,
} from './styled';


type NewCardProp = {
  id:string,
  image:string,
  price:string,
  description:string,
}

const NewCard: React.FC<NewCardProp> = ({id,image,price,description}) => {

  const [check,setCheck] =useState(false);

  return (
    <CardContainer id={id} onClick={()=>setCheck(!check)}>
      <CardImageContainer>
        <CardImage src={image} alt={description}  />
      </CardImageContainer>
      <CardTextContainer>
        <CardPrice>{price}</CardPrice>
        <CardDescrition>{description}</CardDescrition>
      </CardTextContainer>
      <IconZone isCheck={check} >
        <AiFillHeart/>
      </IconZone>
    </CardContainer>
  );
}

export default NewCard;