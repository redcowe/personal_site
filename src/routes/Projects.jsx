import ProjectTemplate from "../components/Projects/ProjectTemplate";

const Projects = () => {
    return (
        <div className="project-wrapper">
            <div className="current-projects">
                <h2 className="current-projects-h2">Current</h2>
                <ProjectTemplate title="Personal Site" desc="Personal Website" link="https://github.com/redcowe/personal_site"/>
                <ProjectTemplate title="Blog API" desc="Repo for my blog API" link="https://github.com/redcowe/LearnJava"/>
                <ProjectTemplate title="DS And Algos" desc="A repo for my leetcode solutions" link="https://github.com/redcowe/DSAlgosPractice"/>
            </div>
            <div className="completed-projects">
                <h2 className="completed-projects-h2">Recently Completed</h2>
                <ProjectTemplate title="Student Roster" desc="A C++ based command-line program" link="https://github.com/redcowe/student-roster"/>
                <ProjectTemplate title="Akiya-Scraper" desc="A webscraper writen in Go" link="https://github.com/redcowe/akiya-scraper"/>
                <ProjectTemplate title="Basic Info Site" desc="Repo for practicing with Nodejs" link="https://github.com/redcowe/student-roster"/>
            </div>
        </div>
    )
}

export default Projects;