import React, { Component } from 'react'
import '../styles/work.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import WorkTemplate from './WorkTemplate';

export class Work extends Component {
    render() {
        return (
            <div className="page-container work-page">
                <Router>
                <div className="work-list">
                    <Link to="/work/workId" >
                    <div className="work-entry">
                        <div className="work-details">

                            <h2>THREE Insurance</h2>
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
                    </Link>
                    <div className="work-entry">
                        <div className="work-details">

                            <h2>Gary Bennett Architecture</h2>
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

                </Router>
            </div>
        )
    }
}

export default Work
