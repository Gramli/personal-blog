import styled from 'styled-components';

interface LabelProps{
    align?:string,
}

const Label = styled.label<LabelProps>`
    font-weight: bold;
    width: 40%;
    display: inline-block;
    text-align: ${props => props.align ? props.align : 'left'};
`;

export default Label;