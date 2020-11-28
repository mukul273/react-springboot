import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div><a href="#details" className="navbar-brand">Employee Management Application</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
