import { FC } from "react";

import SidebarLink from "../SideBarLink";
import * as S from "./styles";
import logo from './assets/logo_s.svg'
import Text from '../Text';

const Sidebar: FC = () => {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} height="48" alt="Logo"/>
        <div>
          <Text weight="medium">Shiny Bank</Text>
          <Text size="font-15" color="grey-600">John Doe</Text>
        </div>
      </S.Header>
      <S.Nav>
        <SidebarLink iconName="company" to="/bank">
          Bank
        </SidebarLink>
        <SidebarLink iconName="credit-card-recto" to="/payment-cards">
          Payment cards
        </SidebarLink>
      </S.Nav>
    </S.Container>
  );
};

export default Sidebar;
