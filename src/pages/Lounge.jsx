import { Link } from "react-router-dom";
import { Container, H1, Div } from "./styled-components";

const Lounge = () => {
  return (
    <Container>
      <H1>The Lounge</H1>
      <br />
      <p>Admins and Editors can hang out here.</p>
      <Div>
        <Link to="/">Home</Link>
      </Div>
    </Container>
  );
};

export default Lounge;
