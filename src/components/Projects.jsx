import { useState, useEffect } from "react";
import data from '../data/Projects.json'
import './Project.css'

const ProjectData = data.Projects;

function Projects(){
    const [currPage, setCurrPage] = useState(1);
    const [amount, setAmmount] = useState(3);
    const lastIndex = currPage * amount;
    const firstIndex = lastIndex - amount;
    const currProjects = ProjectData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(ProjectData.length / amount);

    useEffect(() => {
    });
    return(
        <>
            <div className='windowProject'>
                <div className="ProjectList">
                    <div id="ProjectHeader" className="ProjectHeaderDiv">
                        <h2>▶ My projects</h2>
                    </div>
                </div>
                <div className="ProjectList" style={{justifyContent:"center"}}>
                    <div style={{height:"80vh"}}>
                        {currProjects.map((p) => (
                            <div key={p.name} className="ProjectItem" >
                                <img src={p.img} loading='lazy' height={"150px"} width={"150px"} className="ProjectImg"/>
                                <div>
                                    <h1>{p.name}</h1>
                                    <p>{p.desc} </p>
                                    <ul>
                                        {p.Tools.map(tool => (
                                            <li key={p.name + tool}>{tool}</li>
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
                                            <i className="bi bi-box-arrow-up-right" style={{ fontSize:"2em", color:"white"}}></i>
                                            Live Demo
                                        </a>
                                    </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="RowDiv" style={{justifyContent:"space-evenly", alignItems:"center"}} >
                        <i className="bi bi-arrow-left-circle" style={{ fontSize:"2em", color:"var(--bg)", margin:"5px 10px"}} onClick={() => {
                            if (currPage !=0) {
                                setCurrPage(currPage - 1);
                            }
                        }}></i>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <i key={i} className="bi bi-circle-fill" onClick={() => setCurrPage(i + 1)} style={{padding: "5px 10px", color: currPage === i + 1 ? "var(--bg)" : "hsla(0, 0%, 100%, 0.226)"}}></i>
                        ))}

                        <i className="bi bi-arrow-right-circle" style={{ fontSize:"2em", color:"var(--bg)", margin:"5px 10px"}} onClick={() => { 
                            if (currPage != totalPages) {
                                setCurrPage(currPage + 1);
                            }
                        }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;