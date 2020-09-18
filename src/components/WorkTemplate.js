import React, { Component } from 'react';
import '../styles/worktemplate.css';

export class WorkTemplate extends Component {
    render() {
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
                                <p>South Park</p>
                            </div>
                            <div>
                                <p>Link</p>
                                <a href="hbomax.com">hbomax.com</a>
                            </div>
                            <ul className="tag-list">
                                <li className="tag">Comedy</li>
                                <li className="tag">Animation</li>
                            </ul>
                        </div>

                    </div>
                    <div className="des">
                        <p>Risus nulla sapien, tempor donec. Et nullam aliquam ornare velit dignissim. Laoreet elit at quis suspendisse. Eget egestas sodales ut massa praesent id tristique enim quis.</p>
                        <p>Auctor turpis quam leo, at pharetra elementum scelerisque pellentesque proin. Tortor purus vestibulum sit eget adipiscing libero vitae.</p>
                        <p>Adipiscing feugiat pretium sed sit pellentesque quam penatibus turpis. Cras tristique scelerisque molestie viverra sociis.</p>
                        <p>Risus nulla sapien, tempor donec. Et nullam aliquam ornare velit dignissim. Laoreet elit at quis suspendisse. Eget egestas sodales ut massa praesent id tristique enim quis.</p>
                        <p>Auctor turpis quam leo, at pharetra elementum scelerisque pellentesque proin. Tortor purus vestibulum sit eget adipiscing libero vitae.</p>
                        <p>Adipiscing feugiat pretium sed sit pellentesque quam penatibus turpis. Cras tristique scelerisque molestie viverra sociis.</p>
                    
                    </div>
                </div>
                <div className="project-imgs">
                    <img src="https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg"/>
                    <img src="https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg"/>
                    <img src="https://assets.website-files.com/5ee9634953b7208d74126fe8/5eeaa8ecaefc2fc32feb1f54_landscape-1-p-1080.jpeg"/>

                </div>
            </div>
        )
    }
}

export default WorkTemplate
