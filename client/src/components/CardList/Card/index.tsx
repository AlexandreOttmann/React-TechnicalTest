import { ICardProps } from "../../../@types/apiResults";
import Carte_Physique_Premium from "./assets/Carte_Physique_Premium.svg";
import Carte_Virtuelle_Basic_Premium from "./assets/Carte_Virtuelle_Basic_Premium.svg";
import * as C from "./styles";
import Badge from "./Badge";
import { Last4Digits } from "../../../utils/last4DigitsFromPan";
import { toPercent } from "../../../utils/toPercent";
import { NumberToLocal } from "../../../utils/convertNumberToLocal";

const Card = ({ card, payment, isFiltered }: ICardProps) => {
  return (
    <C.Container>
      <C.OwnerContainer>
        <img
          height="30"
          alt="CardLogo"
          src={
            card.isPhysical > 0
              ? Carte_Physique_Premium
              : Carte_Virtuelle_Basic_Premium
          }
        />
        <C.OwnerTextContainer>
          <C.P>{card.owner}</C.P>
          <C.Legend>
            {card.isPhysical > 0
              ? `Physical Card ${Last4Digits(card.pan)}`
              : `Virtual Card ${Last4Digits(card.pan)}`}
          </C.Legend>
        </C.OwnerTextContainer>
      </C.OwnerContainer>

      {!isFiltered && (
        <C.PaymentContainer>
          <C.P>
            {NumberToLocal(payment.balance)}€ on {NumberToLocal(payment.limit)}€
          </C.P>
          <C.ContainerProgress>
            <C.Background />
            <C.ProgressBar
              percent={toPercent(payment.balance, payment.limit)}
            />
          </C.ContainerProgress>
          <C.Legend>Payment limit</C.Legend>
        </C.PaymentContainer>
      )}

      <Badge status={card.status} />
    </C.Container>
  );
};

export default Card;
