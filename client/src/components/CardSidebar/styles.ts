import styled from "styled-components";




export const Sidebar = styled.div.attrs((props: { sidebarStatus:boolean}) => props)`
// display: ${({ sidebarStatus }) => sidebarStatus ? "block" : "none"}};
backdrop-filter: blur(8px);
height:100%;
position:fixed;
right:0;
transform: ${({ sidebarStatus }) => sidebarStatus ? "translateX(0)" : "translateX(50em)"}};

transition: transform 300ms ease-out;


`
export const Container = styled.aside`
  width: 359px;
  height:100%;
  display: flex;
  flex-direction: column;
  border-left: solid 1px ${({ theme }) => theme.colors['grey-400']};
  margin:auto;
  align-items:center;
`;

export const Button = styled.button`
background: #F3F5F6;

border-radius: 100px;
width: 32px;
height: 32px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
margin: 10px;
gap: 8px;
align-self:end;
&:hover {
   background: #E2F0FD;
   cursor: pointer;
}
`

export const Card = styled.div.attrs(
  (props: { background:string}) => props
)`
position:relative;
border-radius: 10px;
height:167px;
width:263px;
background: center / cover  url(${({ background }) => background});
filter: drop-shadow(0 0 0.1rem #B1BACC);
`

export const CardContent = styled.div`
display:flex;
flex-direction:column;
padding:1em;`

export const CardInfo = styled.div`
margin-top:3em;
`
export const Text = styled.p.attrs(
  (props: {color:string}) => props
)`
color: ${({color}) => color};
margin-top:0.5em;

`
export const ActionText = styled.p.attrs(
  (props: {color:string}) => props
)`
color: ${({color}) => color};
margin-top:0.5em;
padding:1em;
`

export const UserButton = styled.button`
margin-top:3em;
display: flex;
flex-direction: row;
align-items: center;

padding: 10px 12px;
gap: 8px;
background: #F3F5F6;
border-radius: 54px;
cursor: pointer;
&:hover{
  background:  #E2F0FD;
}
`
export const UnlockButton = styled.button`

display: flex;
flex-direction: row;
align-items: center;
color:white;
padding: 10px 12px;
gap: 8px;
background: #F05B60;
border-radius: 54px;
cursor: pointer;
&:hover{
  background:  #ffebe6;
  color: #fea791;
}
`

export const Name = styled.h3`
font-weight:bold;
color : #455980;
`
export const ActionName = styled.h3`
font-weight:bold;
color : #17294D;
`

export const ActionCard = styled.div`
border: 1px solid #EDEEF1;
border-radius: 8px;
margin-top:1.5em;
width:90%;

&:hover {
   border: 1px solid  #A8D4FF;
   cursor: pointer;
}
`
export const ActionContainer = styled.div`
width:100%;
margin-left:2em;
`

export const ActionButtonLeft = styled.div`
display:flex;
flex-direction:row;
gap:5px;`

export const ActionButton = styled.button`

width:80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 10px 12px;
border-radius: 54px;

`