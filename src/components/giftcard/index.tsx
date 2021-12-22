import React, { useState } from "react";
import {
  GiftCardContainer,
  GiftCardDescrition,
  GiftCardIcon,
  GiftPrice,
  Image,
} from "./styled";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

type GiftCardProps = {
  id: string;
  image: string;
  price: string | Number;
  descrition: string;
};

const GiftCard: React.FC<GiftCardProps> = ({
  id,
  image,
  price,
  descrition,
}) => {
  
  const [check, setCheck] = useState(true);

  return (
    <GiftCardContainer id={id} onClick={() => setCheck(!check)}>
      <Image src={image} />
      <GiftPrice>R${price}</GiftPrice>
      <GiftCardDescrition>{descrition}</GiftCardDescrition>
      <GiftCardIcon>
        {check ? <AiOutlineHeart /> : <AiFillHeart />}
      </GiftCardIcon>
    </GiftCardContainer>
  );
};

export default GiftCard;
