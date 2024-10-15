import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Navbar className="shadow-sm" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
          {/* Добавить условие показа кнопки, если пользователь не авторизован */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
