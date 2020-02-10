import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './ReportingCards.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class ReportingCards extends Component {

    redirectToTarget = (serviceName) => {
        console.log(this.props);
    }
  
    render() {

        return (
            <Aux classes={"ReportingCards " + this.props.classes}>
                <div className="card-row">
                    
                            
                    <div 
                        className="card-col card-1"
                        >   
                        <NavLink 
                            to='/reporting/health'
                            className='reportingLink'>
                            <span>Health</span> 
                            <span>Services</span>
                        </NavLink>

                        <span className="card-symbol card-symbol-1">
                            </span>
                    </div>
                    
        
                    <div className="card-col card-2">
                      <NavLink 
                            to='/reporting/health'
                            className='reportingLink'>
                            <span>Crime</span>
                        </NavLink>
        
                        <span className="card-symbol card-symbol-2">
                        </span>
                    </div>
        
                    <div className="card-col card-3">
                        <span>Neighbour</span> 
                        <span>Hood Rating</span>
        
                        <span className="card-symbol card-symbol-3">
                        </span>
                    </div>
                </div>
        
                <div className="card-row">
                    <div className="card-col card-4">
                        <span>Drugs</span>
        
                        <span className="card-symbol card-symbol-4">
                        </span>
                    </div>
        
                    <div className="card-col card-5">
                        <span>Benefaction</span>
        
                        <span className="card-symbol card-symbol-5">
                        </span>
                    </div>
        
                    <div className="card-col card-6">
                        <span>Road</span> 
                        <span>Condition</span>
        
                        <span className="card-symbol card-symbol-6">
                        </span>
                    </div>
                </div>
        
                <div className="card-row">
                    <div className="card-col card-7">
                        <span>Water</span>
        
                        <span className="card-symbol card-symbol-7">
                        </span>
                    </div>
        
                    <div className="card-col card-8">
                        <span>Pollution</span>
        
                        <span className="card-symbol card-symbol-8">
                        </span>
                    </div>
        
                    <div className="card-col card-9">
                        <span>Waste</span> 
                        <span>Disposal</span>
        
                        <span className="card-symbol card-symbol-9">
                        </span>
                    </div>
                </div>
        
                <div className="card-row">
                    <div className="card-col card-10">
                        <span>Natural</span> 
                        <span>Calamities</span>
        
                        <span className="card-symbol card-symbol-10">
                        </span>
                    </div>
        
                    <div className="card-col card-11">
                        <span>Electricity</span>
        
                        <span className="card-symbol card-symbol-11">
                        </span>
                    </div>
        
                    <div className="card-col card-12">
                        <span>Others</span> 
        
                        <span className="card-symbol card-symbol-12">
                        </span>
                    </div>
                </div>
            </Aux>    
        );
    }
} 

export default ReportingCards;