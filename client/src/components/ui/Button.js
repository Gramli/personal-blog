import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "#1d9410" : "#333"};
  color: #ffffff;
  font-size: 1em;
  padding: 1em 2em 1em 2em ;
  border: 0;
  width: ${props=> props.width || "auto"};
  margin: ${props=> props.margin || "auto"};

&:hover{
    background: ${props => !props.primary ? "#1d9410" : "transparent"};
}`;

export default Button;