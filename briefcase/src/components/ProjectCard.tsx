import { FC } from "react";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    liveDemo: string;
    image: string;
  };
}

const ProjectCard: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-1/2 object-cover"
      />

      <div className="p-6">
        {/* Project Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
        
        {/* Project Description */}
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Technologies Used */}
        <p className="text-sm text-gray-500">
          <strong>Technologies Used:</strong> {project.technologies.join(", ")}
        </p>

        {/* Links */}
        <div className="mt-4 flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View on GitHub
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
