import { Link } from 'react-router-dom';
import { projects } from '../../projects'; // Adjust the path as needed

const styles = `
.hero-works {
  padding: 3rem 1rem;
  background: #f9f9f9;
  text-align: center;
}
.hero-works h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #222;
}
.works-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}
.work-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  transition: transform 0.2s, box-shadow 0.2s;
  width: 300px;
  overflow: hidden;
}
.work-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}
.work-card a {
  color: inherit;
  text-decoration: none;
  display: block;
  height: 100%;
}
.work-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}
.work-card h3 {
  font-size: 1.3rem;
  margin: 1rem 0 0.5rem 0;
}
.work-card p {
  font-size: 1rem;
  color: #555;
  margin: 0 1rem 1.2rem 1rem;
}
.see-more-container {
  margin-top: 1rem;
}
.see-more-button {
  display: inline-block;
  padding: 0.7rem 2rem;
  background: #222;
  color: #fff;
  border-radius: 24px;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s;
}
.see-more-button:hover {
  background: #444;
}
@media (max-width: 900px) {
  .works-list {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .work-card {
    width: 90%;
    max-width: 400px;
  }
}
`;

const HeroWorks = () => {
  // Pick the first 3 projects to feature
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="hero-works">
      <style>{styles}</style>
      <h2>My Works</h2>
      <div className="works-list">
        {featuredProjects.map((work) => (
          <div className="work-card" key={work.id}>
            <Link to={`/projects/${work.id}`}>
              <img
                src={work.imageUrl}
                alt={work.title}
                className="work-image"
              />
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="see-more-container">
        <Link to="/myworks" className="see-more-button">
          See more
        </Link>
      </div>
    </section>
  );
};

export default HeroWorks;
