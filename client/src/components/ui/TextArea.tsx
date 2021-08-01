import styled from 'styled-components';

interface TextAreaProps{
    height?: string
} 

const TextArea = styled.textarea<TextAreaProps>`
    font-weight: bold;
    margin-bottom: 1em;
    width: 100%;
    padding: 0.5em;
    resize: vertical;
    height: ${props => props.height || "auto"};
    box-sizing: content-box;
`;
export default TextArea;