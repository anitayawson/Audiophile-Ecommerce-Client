import "./PageNotFound.scss";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section>
      <div className="nav-bg"></div>
      <div className="error-page__content-wrapper">
        <article className="error-page__content">
          <h1 className="error-page__title">Page Not Found</h1>
          <p className="error-page__subtitle">
            We can't seem to find the page you are looking for. Please check the
            spelling or return to the homepage.
          </p>
          <button onClick={handleClick} className="error-page__btn">
            Homepage
          </button>
        </article>
      </div>
    </section>
  );
}
