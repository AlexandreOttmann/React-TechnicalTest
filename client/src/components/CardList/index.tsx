import { ICardsList, ICard } from "../../@types/apiResults";
import { FC } from "react";
import Card from "./Card";
import * as CL from "./styles";

interface CardsListProps {
  userData: ICardsList;
  onCardSelect: (card: ICard) => void;
  isFiltered: boolean;
}

//! Mock data used to display payment limit
//! We can assume it's fetched from the api too
const PaymentLimit = [
  {
    balance: 0,
    limit: 10000,
  },
  {
    balance: 5238.61,
    limit: 10000,
  },
  {
    balance: 1188.61,
    limit: 10000,
  },
  {
    balance: 1188.61,
    limit: 10000,
  },
];

const CardsList: FC<CardsListProps> = ({
  userData,
  onCardSelect,
  isFiltered,
}) => {
  const { items } = userData;
  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <CL.Container>
      {items.map((card, index) => {
        return (
          <CL.ListItem
            key={card.id}
            index={isFiltered && index % 2 == 0 ? "#F6F6FE" : "#FFFFFF"}
          >
            <a onClick={() => onCardSelect(card)}>
              <Card
                card={card}
                payment={PaymentLimit[index]}
                isFiltered={isFiltered}
              />
            </a>
          </CL.ListItem>
        );
      })}
    </CL.Container>
  );
};

export default CardsList;
