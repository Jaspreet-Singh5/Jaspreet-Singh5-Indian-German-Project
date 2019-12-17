import React from 'react';

import './Header.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../Button/Button';

const header = (props) => (
    <Aux classes={ "Header " + props.classes }>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1522124012782-163815c216f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1524775906432-f594cea0a926?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>

        <header>
            <div className="header_opening">
                <h1 className="display-1 header_opening--heading1">Ahoy!</h1>
                <h3 className="display-4 header_opening--heading3">Continue to world of limitless</h3>            

                <Button>Continue</Button>
            </div>
        </header>
    </Aux>
);

export default header;