import { useState, useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-subtitle">
          We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
        </p>
        
        <div className="projects-carousel-wrapper">
          <div className="projects-carousel" ref={scrollRef}>
            {projects.map((project) => (
              <div key={project._id} className="project-card">
                <img 
                  src={`http://localhost:5000${project.image}`} 
                  alt={project.name}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600';
                  }}
                />
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;