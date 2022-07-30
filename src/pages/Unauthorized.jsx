import { useNavigate } from "react-router-dom";
import { Container, H1, Div, Button } from "./styled-components";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container>
      <H1>Unauthorized</H1>
      <br />
      <p>You do not have access to the requested page.</p>
      <Div>
        <Button onClick={goBack}>Go Back</Button>
      </Div>
    </Container>
  );
};

export default Unauthorized;
