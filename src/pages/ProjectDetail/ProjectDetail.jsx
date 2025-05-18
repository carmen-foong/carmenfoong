import { useState, useCallback, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Embedded CSS
const styles = `
.project-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  color: #333;
  line-height: 1.6;
}
.project-detail h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #222;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}
.project-media {
  margin: 2rem 0;
}
.video-container {
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.video-container video {
  width: 100%;
  display: block;
}
.embed-container {
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #fafbfc;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}
.project-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
.project-images img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.project-images img:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
.project-content {
  margin-top: 2rem;
}
.project-content h3 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: #444;
}
.project-content p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}
.project-meta {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}
.external-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.2s ease;
}
.external-link:hover {
  background-color: #1d4ed8;
}
@media (max-width: 900px) {
  .project-images {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
@media (max-width: 600px) {
  .project-detail {
    padding: 1rem;
  }
  .project-detail h1 {
    font-size: 2rem;
  }
  .project-images {
    grid-template-columns: 1fr;
  }
}
.back-button {
  background-color: #1c1c1c;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: white;
  border: none;
}
.back-button:hover {
  background-color: whitesmoke;
  color: #1c1c1c;
  border: 1px solid black;
}

/* Lightbox styles */
.lightbox-overlay {
  position: fixed;
  z-index: 9999;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox-img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  background: #fff;
}
.lightbox-close, .lightbox-prev, .lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(30,30,30,0.7);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  z-index: 2;
  transition: background 0.2s;
}
.lightbox-close {
  top: 1.5rem;
  right: 1.5rem;
  left: auto;
  transform: none;
  font-size: 1.5rem;
  background: rgba(30,30,30,0.9);
}
.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: #2563eb;
}
.lightbox-prev {
  left: -3.5rem;
}
.lightbox-next {
  right: -3.5rem;
}
@media (max-width: 600px) {
  .lightbox-prev, .lightbox-next {
    left: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }
  .lightbox-close {
    right: 0.5rem;
    top: 0.5rem;
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
  }
}
`;

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClose();
        }
      }}
    >
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox-prev"
              onClick={onPrev}
              aria-label="Previous"
              style={{ left: 0 }}
              disabled={index === 0}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="lightbox-next"
              onClick={onNext}
              aria-label="Next"
              style={{ right: 0 }}
              disabled={index === images.length - 1}
            >
              <FaChevronRight />
            </button>
          </>
        )}
        <img
          src={images[index]}
          alt={`Project visual ${index + 1}`}
          className="lightbox-img"
        />
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const project = useLoaderData();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i > 0 ? i - 1 : i)),
    []
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i < (project.images?.length || 0) - 1 ? i + 1 : i
      ),
    [project.images]
  );

  return (
    <>
      <style>{styles}</style>
      <Navbar />
      <div className="project-detail">
        <Link to="/myworks" className="back-button">
          <FaArrowLeft /> See other projects
        </Link>
        <h1>{project.title}</h1>
        <div className="project-media">
          {/* Embed Google Drive iframe if present */}
          {project.embedLink && project.embedLink.trim() !== "" && (
            <div className="embed-container">
              <iframe
                src={project.embedLink}
                title="Project Embed"
                width="100%"
                height="800px"
                style={{ border: 0 }}
                allow="autoplay; encrypted-media"
                allowFullScreen="true"
              />
            </div>
          )}
          {project.images?.length > 0 && (
            <div className="project-images">
              {project.images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="project-image-button"
                  aria-label={`View image ${idx + 1} fullscreen`}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    margin: 0,
                    cursor: "pointer",
                    display: "block",
                  }}
                >
                  <img
                    src={img}
                    alt={`${project.title} visual`}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </button>
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
          </div>
        </div>
      </div>
      {lightboxOpen && project.images?.length > 0 && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
      <Footer />
    </>
  );
}
