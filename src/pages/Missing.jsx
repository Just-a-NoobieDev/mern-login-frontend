import { Link } from "react-router-dom";
import { Container, H1, Div } from "./styled-components";

const Missing = () => {
  return (
    <Container>
      <H1>Oops!</H1>
      <p>Page Not Found</p>
      <Div>
        <Link to="/">Visit Our Homepage</Link>
      </Div>
    </Container>
  );
};

export default Missing;
