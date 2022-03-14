import ProjectTemplate from "../components/Projects/ProjectTemplate";

const Projects = () => {
    return (
        <div className="project-wrapper">
            <div className="current-projects">
                <h2>Current</h2>
                <ProjectTemplate title="Personal Site" desc="My website" link="https://github.com/redcowe/personal_site"/>
            </div>
            <div className="completed-projects">
                <h2>Recently Completed</h2>
            </div>
        </div>
    )
}

export default Projects;