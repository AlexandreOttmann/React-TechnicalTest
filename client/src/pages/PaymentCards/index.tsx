import { FC, useEffect, useState } from "react";
import axios from "axios";
import {
  BodyContainer,
  HeaderContainer,
  ButtonContainer,
  Button,
} from "../../components/PageContainer/BodyContainer/styles";

import { ICardsList, ICard } from "../../@types/apiResults";

import PageContainer from "../../components/PageContainer";
import { Searchbar } from "../../components/Searchbar";
import Text from "../../components/Text";
import CardsList from "../../components/CardList";
import CardSidebar from "../../components/CardSidebar";

//Relocate this somewhere ?
const API_ENDPOINT = "http://localhost:3000/cards";

const PaymentCardsPage: FC = () => {
  // Handle status of Button Actives/Inactives and check if list is filtered
  const [isActive, setIsActive] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  const [isDataFiltered, setisDataFiltered] = useState(false);

  // Store api data
  const [userData, setUserData] = useState<ICardsList>({ items: [] });

  // Store api data => filtered by search
  const [filteredData, setFilteredData] = useState<ICardsList>({ items: [] });
  const [textToSearch, setTextToSearch] = useState("");

  // Handle the card seletion to display right sideBar
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCardClick = (card: ICard) => {
    setSelectedCard(card);
    setIsSidebarOpen(true);
  };

  //Get data from searchbar
  const handleSearch = (searchText: string) => {
    setTextToSearch(searchText);
  };

  //Handle clics on 2 buttons : Active & Inactive
  const handleActiveClick = () => {
    setIsActive((prev) => !prev);
    if (isInactive) {
      setIsInactive((prev) => !prev);
    }
  };
  const handleInactiveClick = () => {
    setIsInactive((prev) => !prev);
    if (isActive) {
      setIsActive((prev) => !prev);
    }
  };

  // Filter data depending on Searchbar & the Inactive/Active button | Handling the status of the display
  const getFilteredData = () => {
    const { items } = userData;
    let filteredData: ICard[] = [];

    if (isActive) {
      filteredData = items.filter((item: ICard) => item.status === "active");
      setisDataFiltered(true);
    } else if (isInactive) {
      filteredData = items.filter(
        (item: ICard) => item.status === "lost" || item.status === "locked"
      );
      setisDataFiltered(true);
    } else {
      filteredData = items;
      setisDataFiltered(false);
    }

    if (textToSearch !== "") {
      filteredData = filteredData.filter((item: ICard) =>
        item.owner.toLowerCase().includes(textToSearch.toLowerCase())
      );
      setisDataFiltered(true);
    }
    const updatedUserData: ICardsList = { items: filteredData };
    setFilteredData(updatedUserData);
  };

  //Api Fetch
  const getCardData = () => {
    axios
      .get(API_ENDPOINT)
      .then((response) => {
        setUserData({ items: response.data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => getCardData(), []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  useEffect(
    () => getFilteredData(),
    [textToSearch, userData, isActive, isInactive]
  );

  return (
    <>
      <PageContainer>
        <BodyContainer>
          <Text tag="h1" size="font-26" weight="medium">
            Payment cards
          </Text>

          <HeaderContainer>
            <ButtonContainer>
              <Button onClick={handleActiveClick} active={isActive}>
                Actives
              </Button>
              <Button onClick={handleInactiveClick} active={isInactive}>
                Inactives
              </Button>
            </ButtonContainer>
            <Searchbar onSearch={handleSearch} />
          </HeaderContainer>
          <CardsList
            userData={filteredData}
            onCardSelect={handleCardClick}
            isFiltered={isDataFiltered}
          />
        </BodyContainer>
      </PageContainer>
      <CardSidebar
        selectedCard={selectedCard}
        sidebarStatus={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default PaymentCardsPage;
