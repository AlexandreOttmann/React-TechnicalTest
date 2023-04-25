import { ICard } from "../../@types/apiResults";
import { FC } from "react";

import SidebarCard from "./Content/card";
import ActionsDisplay from "./Content/actions";
import * as S from "./styles";
import Icon from "../Icon";

interface CardSidebarProps {
  selectedCard: ICard | null;
  sidebarStatus: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const CardSidebar: FC<CardSidebarProps> = ({
  selectedCard,
  sidebarStatus,
  setIsSidebarOpen,
}) => {
  return (
    <S.Sidebar sidebarStatus={sidebarStatus}>
      <S.Container>
        <S.Button onClick={() => setIsSidebarOpen(false)}>
          <Icon name="close" color="grey-700" />
        </S.Button>
        {/* CARD DISPLAY */}
        <SidebarCard selectedCard={selectedCard} />

        {/* Go to User Profil ?*/}
        <S.UserButton onClick={() => alert("ToUserProfil")}>
          <Icon name="user" color="grey-700" />
          <S.Name>{selectedCard?.owner}</S.Name>
        </S.UserButton>

        {/* Display locking option if card is Active || lost ||Locked */}
        {selectedCard?.status == "active" ? (
          <ActionsDisplay />
        ) : selectedCard?.status == "lost" ? (
          <S.ActionText color={"#DB394C"}>This card is Lost</S.ActionText>
        ) : (
          <>
            <S.ActionText color={"#DB394C"}>This card is Blocked</S.ActionText>
            <S.UnlockButton
              onClick={() => alert("You're about to unlock your card")}
            >
              Unlock?
            </S.UnlockButton>
          </>
        )}
      </S.Container>
    </S.Sidebar>
  );
};

export default CardSidebar;
