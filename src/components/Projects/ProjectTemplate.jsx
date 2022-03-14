import "./ProjectTemplate.css"
import GitHub from "@mui/icons-material/GitHub"

export default function ProjectTemplate({title, desc, link}) {

    return (
        <div className="project-container">
             <div className="project">
                 <div className="project-left">
                    <div className="project-top">
                        <div className="project-title"><h3>{title}</h3></div>    
                    </div>
                    <div className="project-bottom">
                        <div className="project-description"><p>{desc}</p></div>
                    </div>     
                </div>
                <div className="project-right">
                    <a href={link} target="_blank" rel="noreferrer"><GitHub /></a>
                </div>
            </div>
        </div>
    )
}