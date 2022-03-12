import ProjectTemplate from "../components/Projects/ProjectTemplate";

const Projects = () => {
    return (
        <div className="project-wrapper">
            <div className="current-projects">
                <h2>Current</h2>
                <ProjectTemplate />
                <ProjectTemplate />
                <ProjectTemplate />
            </div>
            <div className="completed-projects">
                <h2>Recently Completed</h2>
                <ProjectTemplate />
                <ProjectTemplate />
            </div>
        </div>
    )
}

export default Projects;