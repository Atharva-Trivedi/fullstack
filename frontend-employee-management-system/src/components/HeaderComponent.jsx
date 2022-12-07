import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }
    render() {
        return (
            <div >
                <header className='pa2 f2 tc'>
                    <nav >
                        <div><a href = 'https://linkedin.com' className='navbar-brand' >Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;