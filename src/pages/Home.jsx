import { Link, useNavigate } from "react-router-dom";
import { Container, Button, H1, Div } from "./styled-components";
import styled from "styled-components";
import useLogout from "../hooks/useLogout";

const HomeContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const H1v = styled(H1)`
  font-size: 24px;
`;

const Buttonv = styled(Button)`
  width: 100%;
`;

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  return (
    <HomeContainer>
      <H1v>Home</H1v>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="/editor">Go to the Editor page</Link>
      <br />
      <Link to="/admin">Go to the Admin page</Link>
      <br />
      <Link to="/lounge">Go to the Lounge</Link>
      <br />
      <Link to="/linkpage">Go to the link page</Link>
      <Div>
        <Buttonv onClick={signOut}>Sign Out</Buttonv>
      </Div>
    </HomeContainer>
  );
};

export default Home;
