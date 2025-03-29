import { useLoaderData } from "react-router-dom";

export default function ProjectDetail() {
  const project = useLoaderData();

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <div className="project-images">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} - Image ${index + 1}`}
          />
        ))}
      </div>
      <h3>Description</h3>
      <p>{project.description}</p>
      <h3>Details</h3>
      <p>{project.content}</p>
      <p>
        <strong>Category:</strong> {project.category}
      </p>
    </div>
  );
}
