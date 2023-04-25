import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
`;

export const OwnerContainer = styled.div`
display:flex;
flex-direction:row;
padding:1em;
min-width:15em;
align-items:center;
`

export const OwnerTextContainer = styled.div` 
display:flex;
margin-left:1em;
flex-direction:column;
gap:3px;
`

export const P = styled.p`
color: #17294D;
font-weight: 500;
font-size: 15px;
`

export const Legend = styled.p`
color: #455980;`


export const ContainerProgress = styled.div`
  height: 4px;
  width: 100%;
  position: relative;
  margin: 5px 0; 
`;
const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
   filter: drop-shadow(0 0 0.1rem #B1BACC);
  
`;

export const Background = styled(BaseBox)`
  background: #EDEEF1;
  width: 100%;
`;
export const ProgressBar = styled(BaseBox).attrs(
  (props: { percent:number}) => props
)`
background:  linear-gradient(90deg, #5CA3FF 0%, #0C6CF3 82.81%);;
  width: ${({ percent }) => percent}%;
 
`

export const PaymentContainer = styled.div`
width:30%;
margin-right:1em;
`