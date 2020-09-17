import React, { Component } from 'react'
import '../styles/home.css';
export class Home extends Component {
    render() {
        return (
            <div className="page-container home-page">
                <div className="home-text" >
                    <div className="headline">
                        <p>Use this space to broadly introduce yourself and set the tone for your website. A personal note, mission statement or even a simple howdy.</p>
                    </div>
                    <div className="skills">
                        <ul className="tag-list">
                            <li className="tag">ReactJS</li>
                            <li className="tag">jQuery</li>
                            <li className="tag">Bootstrap</li>
                            <li className="tag">JavaScript</li>
                            <li className="tag">Node.js</li>
                            <li className="tag">Umbraco</li>
                            <li className="tag">Wordpress</li>
                        </ul>
                    </div>
                </div>
                <div className="home-img">
                    <img alt="rachel katz profile" src="https://i1.sndcdn.com/avatars-000118659780-11hnq9-t500x500.jpg" />
                </div>
            </div>
        )
    }
}

export default Home;
