// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom'; // Import Link
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card">
          <div className="card-img-wrapper">
             <img src={project.image} alt={project.title} />
          </div>
          <div className="card-content">
             <h3>{project.title}</h3>
             <p>{project.desc}</p>
             <div className="tags">
                {project.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
                ))}
             </div>
          </div>
        </div>
    </Link>
  );
};

export default ProjectCard;
