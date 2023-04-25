import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const HeaderContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2em 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 2em;
`;

export const Button = styled.button.attrs(
  (props: { active: boolean }) => props
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active == true ? "#E2F0FD" : "#f3f5f6")};
  border-radius: 8px;
  padding: 6px 12px;
  gap: 8px;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => (props.active == true ? "#0C6CF3" : "#455980")};
  width: 91px;
  height: 34px;
  text-align: justify;
  &:hover {
    box-shadow: 0px 0px 1px 1px #a8d4ff;
    transition: ease-in-out 200ms;
    cursor: pointer;
  }
`;
