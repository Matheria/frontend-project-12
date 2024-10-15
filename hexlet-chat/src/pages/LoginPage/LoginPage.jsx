import { Row, Container, Col, Card, Image } from "react-bootstrap";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import loginImage from "../../assets/login-img.jpg";

const LoginPage = () => {
  return (
    <Container fluid className="h-100">
      <Header />
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <Image src={loginImage} roundedCircle alt="Войти" />
              <LoginForm />
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>Нет аккаунта?</span> <a href="/signup_page">Регистрация</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
