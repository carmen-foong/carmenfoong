import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ProjectDetail.css";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetail() {
  const project = useLoaderData();

  return (
    <>
      <Navbar />
      <div className="project-detail">
        <Link to="/myworks" className="back-button">
          <FaArrowLeft /> See other projects
        </Link>
        <h1>{project.title}</h1>
        <div className="project-media">
          {/* Video container - only renders if videoUrl exists */}
          {project.videoUrl && (
            <div className="video-container">
              <video controls>
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Image gallery */}
          {project.images?.length > 0 && (
            <div className="project-images">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="project-content">
          <h3>Description</h3>
          <p>{project.description}</p>

          <h3>Details</h3>
          <p>{project.content}</p>

          <div className="project-meta">
            <p>
              <strong>Category:</strong> {project.category}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                View External Project
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
