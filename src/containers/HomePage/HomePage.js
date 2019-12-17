import React, { Component } from 'react';
import './HomePage.css';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Reporting from '../../components/Reporting/Reporting';

class HomePage extends Component {
    render () {

        return (
            <Aux classes='HomePage'>
                <div className="top-section">    
                    <Header classes="header"></Header>

                    <Reporting classes="reporting"></Reporting>                    
                </div>
            </Aux>
        );
    }
}

export default HomePage;