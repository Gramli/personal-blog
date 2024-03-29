import styled from 'styled-components';

interface ButtonProps{
  primary?: boolean;
  width?: string,
  margin?: string,
  align?: string,
  topLeftRadius?: string,
  topRightRadius?: string
}

const Button = styled.button<ButtonProps>`
  background: ${props => props.primary ? "#1d9410" : "#333"};
  color: #ffffff;
  font-size: 1em;
  padding: 1em 2em 1em 2em ;
  border: 0;
  width: ${props=> props.width || "auto"};
  margin: ${props=> props.margin || "auto"};
  text-align: ${props => props.align ? props.align : "center"};

&:hover{
    background: ${props => !props.primary ? "#1d9410" : "transparent"};
}`;

export default Button;