import React from "react";
import { NewProductContainer, NewSectionContainer, NewSectionTitle } from "./styled";
import { SectionProps } from "../../@types/section";
import NewCard from "../newCard";
import news from '../../services/newcards'


const NewSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <NewSectionContainer id={id}>

      <NewSectionTitle>Novos Presentes para você</NewSectionTitle>

      <NewProductContainer>
        {
          news.map((item)=>(
            <NewCard 
              id={item.id}
              image={item.image}
              price={item.price}
              description={item.descrition}
            />
          ))
        }
      </NewProductContainer>

    </NewSectionContainer>
  );
};

export default NewSection;

