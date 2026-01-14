import data from '../data/Projects.json'
import './Project.css'

const ProjectData = data.Projects;

function Projects(){
    return(
        <>
            <div className='windowProject'>
                <div className="ProjectList">
                    <div id="ProjectHeader" className="ProjectHeaderDiv">
                        <h2>▶ My projects</h2>
                    </div>
                </div>
                <div className="ProjectList" style={{justifyContent:"center"}}>
                    {ProjectData.map((p) => (
                        <div className="ProjectItem" >
                            <img src={p.img} loading='lazy' height={"150px"} width={"150px"} className="ProjectImg"/>
                            <div>
                                <h1>{p.name}</h1>
                                <p>{p.desc} </p>
                                <ul>
                                    {p.Tools.map(tool => (
                                        <li key={tool}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='ProjectOverlay'>
                                {p.GitHub && (
                                <div className="ProjectLink">
                                    <a href={p.GitHub} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github" style={{ fontSize: "2em", color: "white" }}></i>
                                    Github
                                    </a>
                                </div>
                                )}
                                {p.LiveDemo && (
                                <div className='ProjectLink'>
                                    <a href={p.LiveDemo}>                                        
                                        <i class="bi bi-box-arrow-up-right" style={{ fontSize:"2em", color:"white"}}></i>
                                        Live Demo
                                    </a>
                                </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {/* <div className="RowDiv" >
                        <i class="bi bi-arrow-left-circle" style={{ fontSize:"2em", color:"var(--bg)", margin:"5px 10px"}}></i>
                        <i class="bi bi-arrow-right-circle" style={{ fontSize:"2em", color:"var(--bg)", margin:"5px 10px"}}></i>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Projects;