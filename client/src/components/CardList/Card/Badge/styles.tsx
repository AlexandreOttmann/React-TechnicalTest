import styled from "styled-components";

export const ActiveBadge = styled.div.attrs(
  (props: { color: string; bgcolor: string }) => props
)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  height: 2em;
  width: fit-content;
  text-align: center;
  color: ${(props) => props.color};
  background: ${(props) => props.bgcolor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.15em 0.7em;
  margin-right: 1em;
`;
