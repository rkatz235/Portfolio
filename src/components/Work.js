import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route, 
    Switch
} from 'react-router-dom';
import '../styles/work.css';

export class Work extends Component {
    render() {
        return (
            <div className="page-container work-page">
                <div className="work-list">

                    <div className="work-entry">
                        <div className="work-details">
                            <Link to="/work/0">
                                <h2>THREE Insurance</h2>
                            </Link>
                            <ul className="tag-list">
                                <li className="tag">Umbraco</li>
                                <li className="tag">ASP.Net</li>
                                <li className="tag">JavaScript</li>
                                <li className="tag">Responsive</li>
                                <li className="tag">Microsoft Azure</li>
                            </ul>
                        </div>

                        <div className="work-image">
                            <img alt="three insurance screenshot" src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-stock-photo-websites.jpg"  />
                        </div>
                    </div>
                    <div className="work-entry">
                        <div className="work-details">
                            <Link to="/work/1">
                                <h2>Gary Bennett Architecture</h2>
                            </Link>
                            <ul className="tag-list">
                                <li className="tag">ReactJS</li>
                                <li className="tag">jQuery</li>
                                <li className="tag">Responsive</li>

                            </ul>
                        </div>
                        <div className="work-image">
                            <img alt="gary bennett screenshot" src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-stock-photo-websites.jpg"  />
                        </div>
                    </div>
                    <div className="work-entry">
                        <div className="work-details">

                            <h2>Alev Studios</h2>
                            <ul className="tag-list">
                                <li className="tag">PHP</li>
                                <li className="tag">GoDaddy</li>
                            </ul>
                        </div>

                        <div className="work-image">
                            <img alt="alev studios screenshot" src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-stock-photo-websites.jpg"  />
                        </div>
                    </div>
                    <div className="work-entry">
                        <div className="work-details">

                            <h2>Wholefield's</h2>
                            <h3>Coming Soon</h3>
                            <ul className="tag-list">
                                <li className="tag">Wordpress</li>
                                <li className="tag">Shopify</li>
                                <li className="tag">React</li>
                            </ul>
                        </div>
                        <div className="work-image">
                            <img alt="wholefields screenshot" src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-stock-photo-websites.jpg"  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
