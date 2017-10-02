import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8" id="footer-image">
                            <img src="" id="footer-image" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 solid-footer">
                            <p>©  2017 Buffy Feinstein</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
