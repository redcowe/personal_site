import "./ProjectTemplate.css"

export default function ProjectTemplate() {
    return (
        <div className="project-container">
             <div className="project">
                <div className="project-top">
                    <div className="project-title"><h3>Title</h3></div>    
                </div>
                <div className="project-bottom">
                    <div className="project-description"><p>Description</p></div>
                </div>     
            </div>
        </div>
    )
}