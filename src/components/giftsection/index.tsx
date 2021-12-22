import React from 'react';
import GiftCard from '../giftcard';
import gift from '../../services/giftcards';
import { GiftSectionContainer, GiftSectionTitle, GiftWrapper } from './styled';
import {SectionProps} from '../../@types/section';

const GiftSection:React.FC<SectionProps> = ({id})=>{
  return(
    <GiftSectionContainer id={id} >
      <GiftSectionTitle>Presentei seus amigos e família</GiftSectionTitle>
      <GiftWrapper>

        {gift.map((item)=>(
          <GiftCard
            id={item.id}
            image={item.image}
            price={item.price}
            descrition={item.descrition}
          />
          )
        )}

      </GiftWrapper>
    </GiftSectionContainer>
  )
}


export default GiftSection;
