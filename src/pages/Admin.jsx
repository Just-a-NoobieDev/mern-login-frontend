import { Link } from "react-router-dom";
import Users from "../components/Users";
import { Container, H1, Div } from "./styled-components";

const Admin = () => {
  return (
    <Container>
      <H1>Admins Page</H1>
      <br />
      <Users />
      <br />
      <Div>
        <Link to="/">Home</Link>
      </Div>
    </Container>
  );
};

export default Admin;
