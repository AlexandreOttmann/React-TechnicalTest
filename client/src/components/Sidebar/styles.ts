import styled from "styled-components";

export const Container = styled.aside`
  width: 240px;
  display: flex;
  flex-direction: column;
  border-right: solid 1px ${({ theme }) => theme.colors['grey-400']};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings['space-8']};
  padding-top: ${({ theme }) => theme.spacings['space-32']};
  padding-left: ${({ theme }) => theme.spacings['space-24']};
  `;

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacings['space-16']};
  padding: ${({ theme }) => theme.spacings['space-24']};
  background-color: ${({ theme }) => theme.colors['grey-200']};
`