import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "#1d9410" : "#333"};
  color: #ffffff;
  font-size: 1em;
  padding: 1em;
  padding-right: 5.5rem;
  padding-left: 5.5rem;
  border: 0;

&:hover{
    background: ${props => !props.primary ? "#1d9410" : "transparent"};
}`;

export default Button;