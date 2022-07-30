import { Link } from "react-router-dom";
import { Container, Div, H1 } from "./styled-components";

const Editor = () => {
  return (
    <Container>
      <H1>Editors Page</H1>
      <br />
      <p>You must have been assigned an Editor role.</p>
      <Div>
        <Link to="/">Home</Link>
      </Div>
    </Container>
  );
};

export default Editor;
