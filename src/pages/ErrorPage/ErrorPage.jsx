// src/pages/ErrorPage/ErrorPage.jsx
import { useRouteError, Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to="/" className="back-link">
        ← Back home
      </Link>
    </div>
  );
}
