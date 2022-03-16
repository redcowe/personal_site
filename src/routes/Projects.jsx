import ProjectTemplate from "../components/Projects/ProjectTemplate";

const Projects = () => {
    return (
        <div className="project-wrapper">
            <div className="current-projects">
                <h2 className="current-projects-h2">Current</h2>
                <ProjectTemplate title="Personal Site" desc="Personal Website" link="https://github.com/redcowe/personal_site"/>
                <ProjectTemplate title="Learning Java" desc="Repo for my java learning" link="https://github.com/redcowe/LearnJava"/>
            </div>
            <div className="completed-projects">
                <h2 className="completed-projects-h2">Recently Completed</h2>
                <ProjectTemplate title="Student Roster" desc="A C++ based command-line program" link="https://github.com/redcowe/student-roster"/>
            </div>
        </div>
    )
}

export default Projects;