import React, { Component } from 'react'
import bakery from "../videos/bakery-video.mp4";
import listifi from "../videos/listifi-video.mp4";
import gabble from "../videos/gabble-video.mp4";
import flow from "../videos/blog-video.mp4";


export default class Work extends Component {
    render() {
        return (
            <div id="work">
                <div className="container">
                    <div className="row project">
                        <video className="d-block img-fluid col-md-8 project-img" src={bakery} controls controlsList="nodownload"></video>                        <div className="col-md-4" id="project-info">
                            <h5>Billy's Bakery: E-Commerce Site</h5>
                            <p>This is a mock e-commerce bakery site built with React. The overall goal of this project was to utilize the React framework along with React routing to dynamically generate URL endpoints for a detail element page on a parent element page using React Router 4. </p>
                            <p>Technologies: React, React-Router, Bootstrap, CSS, and HTML</p>
                            <a href="https://billys-bakery.surge.sh" className="live-btn" target="_blank">Live Site</a>
                            <a href="https://github.com/buffyf/eCommerceSite" className="github-btn" target="_blank">GitHub</a>
                        </div>
                    </div>
                    <div className="row project">
                        <video className="d-block img-fluid col-md-8 project-img" src={listifi} controls controlsList="nodownload"></video>                        <div className="col-md-4" id="project-info">
                            <h5>Listifi: Song Sharing App</h5>
                            <p>This song-sharing app utilizes an API to return a list of song recommendations that users have contributed to the API. This project focused on managing state, props, lifecycles, and forms.</p>
                            <p>Technologies: React, Bootstrap, CSS, and HTML</p>
                            <a href="https://listifi.surge.sh" className="live-btn" target="_blank">Live Site</a>
                            <a href="https://github.com/buffyf/reactMusicApp" className="github-btn" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div className="row project">
                        <video className="d-block img-fluid col-md-8 project-img" src={gabble} controls controlsList="nodownload"></video>                        <div className="col-md-4" id="project-info">
                            <h5>Gabble: Social Site</h5>
                            <p>Gabble is a social site that allows users to signup for an account, login, create and delete posts, like and unlike posts, and also view a list of a comment's likes.</p>
                            <p>Technologies: Node.js, Express, Sequelize, PostgreSQL, Mustache, and Amazon Web Services</p>
                            <a href="http://buffy-gabble.xyz" className="live-btn" target="_blank">Live Site</a>
                            <a href="https://github.com/buffyf/project_gabble" className="github-btn" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div className="row project">
                        <video className="d-block img-fluid col-md-8 project-img" src={flow} controls controlsList="nodownload"></video>                        <div className="col-md-4" id="project-info">
                            <h5>Type-Flow: Blog</h5>
                            <p>Leveraging an API, this app allows the user to post a message and then view all messages posted to the API. When you click on a blog title it takes you to a component that dynamically renders with the blogs id as an endpoint.</p>
                            <p>Technologies: React, React-Router, Axios, and Bootstrap.</p>
                            <a href="https://type-flow.surge.sh" className="live-btn" target="_blank">Live Site</a>
                            <a href="https://github.com/buffyf/React-Blog" className="github-btn" target="_blank">GitHub</a>
                        </div>
                    </div>
                    <a href="https://github.com/buffyf" className="view-more">View More On Github ></a>

                </div>
            </div>
        )
    }
}
