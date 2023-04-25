import styled from "styled-components";

export const Input = styled.input`
  height: 2em;
  font-size: 20px;
  width: 100%;
  border: none;
  background-color: #f3f5f6;
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  cursor: text;
  color: #455980;

  :focus::placeholder {
    color: transparent;
    transition: 0.3s;
  }

  ::placeholder {
    color: #455980;
    font-weight: bold;
  }
  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: #455980;
      transition: 0.3s;
    }
  }
`;
