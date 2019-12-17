import React from 'react';

import './ReportingCards.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const reportingCards = props => (
    <Aux classes={"ReportingCards " + props.classes}>
        <div className="card-row">
            <div className="card-col">
                sads
            </div>

            <div className="card-col">
                asdad
            </div>

            <div className="card-col">
                asds
            </div>
        </div>

        <div className="card-row">
            <div className="card-col">
                sads
            </div>

            <div className="card-col">
                asdad
            </div>

            <div className="card-col">
                asds
            </div>
        </div>
    </Aux>    
);

export default reportingCards;