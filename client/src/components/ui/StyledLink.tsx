import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
text-decoration: none;
color: black;
&:hover h2{
    color:#1d9410;
}
`;
export default StyledLink;