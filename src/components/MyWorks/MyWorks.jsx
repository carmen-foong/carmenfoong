import { useState } from "react";
import "./MyWorks.css";
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
      <h1 className="title">MY WORKS</h1>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
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
