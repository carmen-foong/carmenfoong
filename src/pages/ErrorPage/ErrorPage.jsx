// src/pages/ErrorPage/ErrorPage.jsx
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-container" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      padding: "2rem",
      backgroundColor: "#f8f9fa",
      color: "#212529",
      animation: "fadeIn 0.5s ease-out"
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .error-container h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #dc3545;
        }
        .error-container p {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .error-container i {
          color: #6c757d;
          font-style: normal;
        }
        .back-link {
          display: inline-block;
          margin-top: 2rem;
          padding: 0.75rem 1.5rem;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 0.3rem;
          font-weight: 500;
          transition: background-color 0.2s ease;
        }
        .back-link:hover {
          background-color: #0056b3;
        }
        @media (max-width: 768px) {
          .error-container h1 {
            font-size: 2.5rem;
          }
          .error-container p {
            font-size: 1rem;
          }
          .back-link {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
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
