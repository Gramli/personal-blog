import styled from 'styled-components';

const TextArea = styled.textarea`
    font-weight: bold;
    margin-bottom: 1em;
    width: 100%;
    padding: 0.5em;
    resize: vertical;
    height: ${props => props.height || "auto"};
    box-sizing: content-box;
`;
export default TextArea;