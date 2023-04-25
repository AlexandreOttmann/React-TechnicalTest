import { FC } from "react";
import { useLocation } from "react-router-dom";

import Icon, { IconName } from "../Icon";
import Text from "../Text";
import { Color } from "../../theme";
import * as S from "./styles";

interface SidebarLinkProps {
  children: string;
  iconName: IconName;
  to: string;
}

const SidebarLink: FC<SidebarLinkProps> = ({ children, iconName, to }) => {
  const { pathname } = useLocation();

  const isActiveLink = pathname.startsWith(to);
  const color: Color = isActiveLink ? "blue-700" : "grey-700";

  return (
    <S.LinkContainer to={to}>
      <Icon color={color} size="font-16" name={iconName} />
      <Text color={color} size="font-16" weight="medium">
        {children}
      </Text>
    </S.LinkContainer>
  );
};

export default SidebarLink;
