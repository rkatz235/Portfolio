import React, { Component } from 'react';
import '../styles/worktemplate.css';

export class WorkTemplate extends Component {
    constructor(){
        super();
        
        this.projInfos = [
            {
                title: "South Park",
                link: "hbomax.com",
                tags: ["comedy", "anim"],
                des: "djflsjdflsjdflskdjflksjdfk",
                imgs: [
                    "https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg",
                    "https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg",
                    "https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg"
                ]
            },
            {
                title: "Space X",
                link: "netflix.com",
                tags: ["aero", "science"],
                des: "djflsjdflsjdflskdjflksjdfk",
                imgs: [
                    "https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg",
                    "https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg",
                    "https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg"
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
                                <a href="hbomax.com">{curProj.link}</a>
                            </div>
                            <ul className="tag-list">
                                {curProj.tags.map((el, i) => 
                                    <li className="tag">{el}</li>
                                )}
                            </ul>
                        </div>

                    </div>
                    <div className="des">
                        <p>{curProj.des}</p>
                    </div>
                </div>
                <div className="project-imgs">
                    {curProj.imgs.map((el, i) => <img src={el} />)}
                </div>
            </div>
        )
    }
}

export default WorkTemplate
