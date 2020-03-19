import React from 'react';
import './flip.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const FlipCard = ({dat}) => {

    let x = dat.getDate().toLocaleString();
    let y = dat.getMonth().toLocaleString();
    return (
        <div className="maincontainer">
            <div className="thecard">
                <div className="thefront">
                    <div>
                        &nbsp; Hover to watch Full Calendar.
                         <p> Date :  <span>{x}</span> </p>
                         <p className="tt"> Month :  <span>{y}</span> </p>
                    </div>
                </div>
                <div className="theback">
                    <Calendar />
                </div>
            </div>
        </div>
    );
};

export default FlipCard;