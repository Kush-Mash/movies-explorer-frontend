import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__subtitle">Страница не&nbsp;найдена</p>
      <button className="page-not-found__back" type="button" onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default PageNotFound;
