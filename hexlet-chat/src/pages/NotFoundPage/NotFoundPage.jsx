import Header from "../../components/Header/Header";
import NotFoundImg from "../../assets/404.svg";

const NotFoundPage = () => {
  return (
    <div className="h-100">
      <div className="d-flex flex-column h-100">
        <Header />
        <div className="text-center">
          <img className="img-fluid w-25" src={NotFoundImg} alt="Страница не найдена" />
          <h1 className="h4 text-muted">Страница не найдена</h1>
          <p className="text-muted">
            Но вы можете перейти <a href="/">на главную страницу</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
