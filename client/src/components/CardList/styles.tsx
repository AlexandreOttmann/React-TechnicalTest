import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  background-color: #edeef1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #edeef1;
`;

export const ListItem = styled.li.attrs((props: { index: string }) => props)`
  height: 4em;
  list-style: none;
  background-color: ${(props) => props.index}!important;
  &:hover {
    background-color: #e2f0fd !important;
    cursor: pointer;
    transition: ease-in-out 100ms;
  }
`;
