
import ProjectCard from "../components/ProjectCard"; 
import portfolio from "../assets/port.png";


const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React, TypeScript, and TailwindCSS.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://yourportfolio.com",
    image: portfolio, 
  },
  {
    id: 2,
    title: "E-commerce App",
    description:
      "A fully functional e-commerce application with user authentication, shopping cart, and payment gateway integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/e-commerce-app",
    liveDemo: "https://your-ecommerce-app.com",
    image: portfolio,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A task management web app to organize and prioritize daily tasks with a clean and minimalistic interface.",
    technologies: ["React", "Firebase", "TailwindCSS"],
    github: "https://github.com/yourusername/task-manager",
    liveDemo: "https://yourtaskmanager.com",
    image: portfolio
  },
  // Add more projects here...
];

const ProjectsPage = () => {
  return (
    <div className="bg-teal-950 min-h-screen text-white px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-sky-500 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
