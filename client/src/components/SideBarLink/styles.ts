import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings['space-8']};
  text-decoration: none;
`;
