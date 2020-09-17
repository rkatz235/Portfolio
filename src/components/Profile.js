import React, { Component } from 'react'
import '../styles/profile.css';

export class Profile extends Component {
    render() {
        return (
            <div className="page-container profile-container">  
                <div className="profile-section">
                    <div className="section-title">
                        <h1>Bio</h1>
                    </div>
                    <div className="section-details">
                        <p>We are a creative family whose passion is to tell human stories through the medium of picture and sound</p>

                        <p>To date we have honed our focus on feature length documentaries, short films, aligned brand content & music videos.</p>

                        <p>We also have our own record label and music production company; Audio Department Records.</p>
                    </div>
                </div>
                <div className="profile-section">
                    <div className="section-title">
                        <h1>Skills</h1>
                    </div>
                    <div className="section-details">
                        <ul className="tag-list">
                            <li className="tag">ReactJS</li>
                            <li className="tag">Node.js</li>
                            <li className="tag">Umbraco</li>
                            <li className="tag">Wordpress</li>
                            <li className="tag">jQuery</li>
                            <li className="tag">CSS/HTML</li>
                            <li className="tag">JavaScript</li>
                        </ul>
                    </div>
                </div>
                <div className="profile-section">
                    <div className="section-title">
                        <h1>Experience</h1>
                    </div>
                    <div className="section-details">
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Girls Who Code</h2>
                                <h4 className="exp-date">Summer '15 - Summer '18</h4>
                                <h3 className="exp-loc">Seattle, NYC</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Girls Who Code</h2>
                                <h4 className="exp-date">Summer '15 - Summer '18</h4>
                                <h3 className="exp-loc">Seattle, NYC</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Girls Who Code</h2>
                                <h4 className="exp-date">Summer '15 - Summer '18</h4>
                                <h3 className="exp-loc">Seattle, NYC</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-entry">
                            <div className="exp-deets">
                                <h2 className="exp-title">Girls Who Code</h2>
                                <h3 className="exp-date">Summer '15 - Summer '18</h3>
                                <h3 className="exp-loc">Seattle, NYC</h3>
                            </div>
                            <div className="exp-des">
                                <ul>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                    <li>sdkjflsdjflskdjflskdjf</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
