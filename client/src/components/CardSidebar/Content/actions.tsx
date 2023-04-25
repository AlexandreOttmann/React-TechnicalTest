import * as S from "../styles";
import Icon from "../../Icon";

const ActionsDisplay = () => {
  return (
    <S.ActionContainer>
      <S.Text color={"#8090B2"}>Actions</S.Text>
      <S.ActionCard onClick={() => alert("Block card")}>
        <S.ActionButton>
          <S.ActionButtonLeft>
            <Icon name="lock" color="grey-800" />
            <S.ActionName>Block the card</S.ActionName>
          </S.ActionButtonLeft>
          <Icon name="chevron-right" color="grey-600" size="font-15" />
        </S.ActionButton>
        <S.ActionText>
          To avoid any fraudulent use of the Bank Card. A blocked card can be
          unblocked at any moment.
        </S.ActionText>
      </S.ActionCard>
    </S.ActionContainer>
  );
};

export default ActionsDisplay;
