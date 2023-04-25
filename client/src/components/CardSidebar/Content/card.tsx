import * as S from "../styles";
import Badge from "../../CardList/Card/Badge";
import Physical_Card from "../assets/CartePremiumSanspuce.svg";
import Virtual_Card from "../assets/Carte_virtuelle.svg";
import { ICard } from "../../../@types/apiResults";

interface SelectedCardProps {
  selectedCard: ICard | null;
}
const SidebarCard = ({ selectedCard }: SelectedCardProps) => {
  return (
    <S.Card
      background={selectedCard?.isPhysical == 1 ? Physical_Card : Virtual_Card}
    >
      <S.CardContent>
        <Badge status={selectedCard?.status} />
        <S.CardInfo>
          <S.Text color={selectedCard?.isPhysical == 1 ? "#D2EEFF" : "#17294D"}>
            {selectedCard?.pan.replace(/\*/g, "•")}
          </S.Text>
          {/* ATTENTION  => CVV & Exp ? How to format with api data ?*/}
          <S.Text color={selectedCard?.isPhysical == 1 ? "#B1BACC" : "#455980"}>
            CVV : ••• Exp : ••/••
          </S.Text>
        </S.CardInfo>
      </S.CardContent>
    </S.Card>
  );
};
export default SidebarCard;
