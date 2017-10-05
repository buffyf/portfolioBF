import React, { Component } from 'react';
import "../styles/contact.css";
import pdf from "../assets/BF_Resume.pdf"

export default class Contact extends Component {

    render() {
        return (
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8" id="contact-wrapper">
                            <h2 id="contact-title">Contact</h2>
                            <div id="contact-info">
                                <div id="icons">
                                    <a href="https://github.com/buffyf" target="_blank"><i className="fa fa-github-square social-icons" id="github" aria-hidden="true"></i>See My Code</a>
                                    <a href="https://www.linkedin.com/in/buffyfeinstein/" target="_blank"><i className="fa fa-linkedin-square social-icons" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Follow Me</a>
                                    <a href=""><i className="fa fa-phone-square social-icons" aria-hidden="true"></i>847.942.7691</a>
                                    <a href="mailto:buffyfeinstein@gmail.com" target="_blank"><i className="fa fa-envelope-square social-icons" aria-hidden="true"></i>Message Me</a>
                                    <a href={pdf} target="blank"><i className="fa fa-arrow-circle-down social-icons" aria-hidden="true"></i>View My Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

