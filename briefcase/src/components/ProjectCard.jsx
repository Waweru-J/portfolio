const ProjectCard = ({ project }) => {
    return (
      <div className="bg-blue-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-sky-400 mb-2">
            {project.title}
          </h2>
          <p className="text-blue-300 text-sm mb-4">{project.description}</p>
  
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-blue-700 text-blue-100 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
  
          {/* Buttons */}
          <div className="flex justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-100 hover:text-sky-400 transition"
            >
              View Code &rarr;
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-100 hover:text-green-400 transition"
            >
              Live Demo &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  