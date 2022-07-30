import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(248, 250, 253, 0) 0%, #f8fafd 100%);
  min-height: 100vh;
  padding: 1rem;
`;

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
