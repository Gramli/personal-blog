import styled from 'styled-components';

const Container = styled.div`
    padding: 1rem;
    margin-left: ${props => props.center ? "auto" : "1rem"};
    margin-right: ${props => props.center ? "auto" : "1rem"};
    width: ${props => props.center ? "50%" : "auto"};
    background-color: transparent;
`;

export default Container;