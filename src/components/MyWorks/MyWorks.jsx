import { useState } from "react";
import { projects } from "/src/projects.js";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Campaigns",
  "Graphic Design",
  "UI/UX",
  "Photography",
  "Video & Films",
];

export default function MyWorks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="container">
      <style>{`
        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .title {
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #333;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 3rem;
          justify-items: center;
          padding: 2rem;
        }

        .project-link {
          text-decoration: none;
          color: inherit;
          width: 100%;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .image-container:hover {
          transform: translateY(-5px);
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #f8a76a;
          color: black;
          padding: 1rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .image-container:hover .project-overlay {
          transform: translateY(0);
        }

        .project-title {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
        }

        .project-description {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: 1fr;
          }
          
          .image-container {
            height: 250px;
          }
          
          .title {
            font-size: 2rem;
          }
        }

        .category-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .filter-button {
          padding: 0.5rem 1.5rem;
          border: none;
          background: #f0f0f0;
          color: #333;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-button:hover {
          background: #e0e0e0;
        }

        .filter-button.active {
          background: #333;
          color: white;
        }

        .project-category {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 0.2rem 0.8rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .category-filter {
            gap: 0.3rem;
          }
          
          .filter-button {
            padding: 0.4rem 1rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .category-filter {
            gap: 0.2rem;
          }
          
          .filter-button {
            padding: 0.3rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
      <h1 className="title">MY WORKS</h1>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-link"
          >
            <div className="image-container">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="image"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
