import React, { Component } from 'react';
import '../styles/worktemplate.css';

export class WorkTemplate extends Component {
    constructor(){
        super();
        
        this.projInfos = [
            {
                title: "Three Insurance",
                link: "threeinsurance.com",
                linkText: "threeinsurance.com",
                tags: ["Microsoft Azure", "Umbraco", "jQuery"],
                des: "djflsjdflsjdflskdjflksjdfk",
                imgs: [
                    require("../img/three/three_home_desk.png"),
                    require("../img/three/three_claims_desk.png"),
                    require("../img/three/three_policy_desk.png")
                ]
            },
            {
                title: "Alev Studios",
                link: "alevstudios.com",
                linkText: "alevstudios.com",
                tags: ["PHP", "jQuery"],
                des: "djflsjdflsjdflskdjflksjdfk",
                imgs: [
                    require("../img/alev/alev_home.png"),
                    require("../img/alev/alev_project.png"),
                    require("../img/alev/alev_projects.png")

                ]
            },
            {
                title: "Gary Bennett Architecture",
                link: "#",
                linkText: "Coming Soon",
                tags: ["React", "jQuery"],
                des: "djflsjdflsjdflskdjflksjdfk",
                imgs: [
                    require("../img/gary/gary_home.png"),
                    require("../img/gary/gary_project_2.png"),
                    require("../img/gary/gary_projects.png")
                ]
            }
        ]
    }
    
    render() {
        let curProj = this.projInfos[this.props.match.params.id];
        return (
            <div className="page-container project-page">
                <div className="project-text">
                    <div className="info">
                        <div className="title">
                            <h1>Project Name</h1>
                        </div>
                        <div className="info-deets">
                            <div>
                                <p>Client</p>
                                <p>{curProj.title}</p>
                            </div>
                            <div>
                                <p>Link</p>
                                <a href={curProj.link}>{curProj.linkText}</a>
                            </div>
                            <ul className="tag-list">
                                {curProj.tags.map((el, i) => 
                                    <li key={i} className="tag">{el}</li>
                                )}
                            </ul>
                        </div>

                    </div>
                    <div className="des">
                        <p>{curProj.des}</p>
                    </div>
                </div>
                <div className="project-imgs">
                    {curProj.imgs.map((el, i) => <img key={i}  alt="website screenshot" src={el} />)}
                </div>
            </div>
        )
    }
}

export default WorkTemplate
