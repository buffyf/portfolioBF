import React, { Component } from 'react';
import "../styles/skills.css";


export default class Skills extends Component {

    render() {
        return (
            <div id="skills">


                <div className="col-md-10" id="text-container">
                    <h2 id="skills-title">Skills</h2>
                    <div id="table">
                        <table>
                            <tbody>
                                <tr>
                                    <td><div className='cell-bulk style1'></div><div className='cell-text'>JAVASCRIPT</div></td>
                                    <td><div className='cell-bulk style2'></div><div className='cell-text'>REACT</div></td>
                                    <td><div className='cell-bulk style3'></div><div className='cell-text'>EXPRESS</div></td>
                                    <td><div className='cell-bulk style4'></div><div className='cell-text'>SEQUELIZE</div></td>
                                    <td><div className='cell-bulk style5'></div><div className='cell-text'>SQL</div></td>
                                    <td><div className='cell-bulk style6'></div><div className='cell-text'>VS CODE</div></td>
                                </tr>
                                <tr>
                                    <td><div className='cell-bulk style7'></div><div className='cell-text'>HTML</div></td>
                                    <td><div className='cell-bulk style8'></div><div className='cell-text'>BOOTSTRAP</div></td>
                                    <td><div className='cell-bulk style9'></div><div className='cell-text'>NODE.JS</div></td>
                                    <td><div className='cell-bulk style10'></div><div className='cell-text'>POSTGRESQL</div></td>
                                    <td><div className='cell-bulk style11'></div><div className='cell-text'>HANDLEBARS</div></td>
                                    <td><div className='cell-bulk style12'></div><div className='cell-text'>SLACK</div></td>
                                </tr>
                                <tr>
                                    <td><div className='cell-bulk style13'></div><div className='cell-text'>CSS</div></td>
                                    <td><div className='cell-bulk style14'></div><div className='cell-text'>ADOBE CC</div></td>
                                    <td><div className='cell-bulk style15'></div><div className='cell-text'>MONGO DB</div></td>
                                    <td><div className='cell-bulk style16'></div><div className='cell-text'>TRELLO</div></td>
                                    <td><div className='cell-bulk style17'></div><div className='cell-text'>GIT/ GITHUB</div></td>
                                    <td><div className='cell-bulk style18'></div><div className='cell-text'>AGILE</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        )
    }
}

