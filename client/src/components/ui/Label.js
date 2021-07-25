import styled from 'styled-components';

const Label = styled.label`
    font-weight: bold;
    width: 40%;
    display: inline-block;
    text-align: ${props => props.align ? props.align : 'left'};
`;

export default Label;