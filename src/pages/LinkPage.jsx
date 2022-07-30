import { Link } from "react-router-dom";
import { Container, H1 } from "./styled-components";
import styled from "styled-components";

const ContainerC = styled(Container)`
  align-items: center;
`;

const LinkPage = () => {
  return (
    <ContainerC>
      <H1>Links</H1>
      <br />
      <h2>Public</h2>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <br />
      <h2>Private</h2>
      <Link to="/">Home</Link>
      <Link to="/editor">Editors Page</Link>
      <Link to="/admin">Admin Page</Link>
    </ContainerC>
  );
};

export default LinkPage;
