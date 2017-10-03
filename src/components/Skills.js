import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../styles/skills.css";


export default class Skills extends Component {

    render() {
        return (
            <div id="skills">
                <div className="">
                    <div className="" id="">
                        <div className="col-md-8" id="text-container">
                            <h2 id="skills-title">Skills</h2>
                            <div id="">
                                <table>
                                    <tr>
                                        <td><div class='cell-bulk style1'></div><div class='cell-text'>JAVASCRIPT</div></td>
                                        <td><div class='cell-bulk style2'></div><div class='cell-text'>REACT</div></td>
                                        <td><div class='cell-bulk style3'></div><div class='cell-text'>ADOBE CC</div></td>
                                        <td><div class='cell-bulk style4'></div><div class='cell-text'>SEQUELIZE</div></td>
                                        <td><div class='cell-bulk style5'></div><div class='cell-text'>SQL</div></td>
                                        <td><div class='cell-bulk style6'></div><div class='cell-text'>VS CODE</div></td>
                                    </tr>
                                    <tr>
                                        <td><div class='cell-bulk style7'></div><div class='cell-text'>HTML</div></td>
                                        <td><div class='cell-bulk style8'></div><div class='cell-text'>BOOTSTRAP</div></td>
                                        <td><div class='cell-bulk style9'></div><div class='cell-text'>NODE.JS</div></td>
                                        <td><div class='cell-bulk style10'></div><div class='cell-text'>POSTGRESQL</div></td>
                                        <td><div class='cell-bulk style11'></div><div class='cell-text'>CSS</div></td>
                                        <td><div class='cell-bulk style12'></div><div class='cell-text'>SLACK</div></td>
                                    </tr>
                                    <tr>
                                        <td><div class='cell-bulk style13'></div><div class='cell-text'>GIT/GITHUB</div></td>
                                        <td><div class='cell-bulk style14'></div><div class='cell-text'>EXPRESS</div></td>
                                        <td><div class='cell-bulk style15'></div><div class='cell-text'>MONGO DB</div></td>
                                        <td><div class='cell-bulk style16'></div><div class='cell-text'>TRELLO</div></td>
                                        <td><div class='cell-bulk style17'></div><div class='cell-text'>skill</div></td>
                                        <td><div class='cell-bulk style18'></div><div class='cell-text'>skill</div></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

