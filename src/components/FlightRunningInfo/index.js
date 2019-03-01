// @flow
import React, { Component } from 'react';
import styles from './index.module.css';

import { IoIosTimer } from 'react-icons/io';

import { dateFormatter, flightPathFormatter, departureTimeFormatter, flightDurationCalculator } from '../../utils/helperFunctions';

class Flightrunninginfo extends Component {
    render() {
        const { flightsData } = this.props;
        
        return (
            <div className={`${styles.flightRunningInfoWrapper}`}>
                {/* <div className={`${styles.travelTimeHeading}`}>Travel Time</div> */}
                {flightsData.map((item) => {
                    const { departure, arrival } = item;

                    const imgSrc = require(`../../images/${item.airlineCode}.gif`);
                    const logoStyle = {
                        backgroundImage: 'url(' + imgSrc + ')',
                        backgroundPosition: `center center`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        height: 20,
                        width: 60,
                    }

                    return (
                        <div key={item.airlineCode} className={`${styles.individualFlightInfo}`}>
                            <div className={`${styles.airlineNameLogo}`}>
                                <div>{item.airline}</div>
                                <div style={logoStyle}></div>
                            </div>
                            <div className={`${styles.date}`}>
                                {dateFormatter(departure.dateTime)}
                            </div>
                            <div className={`${styles.flightPath}`}>
                                {flightPathFormatter(departure, arrival)}
                            </div>
                            <div className={`${styles.departureTime}`}>
                                {`Departs ${departureTimeFormatter(departure.dateTime)}`}
                            </div>
                            <div className={`${styles.flightDuration}`}>
                                <IoIosTimer className={`${styles.iconHolder}`} />
                                {flightDurationCalculator(departure, arrival)}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
};

export default Flightrunninginfo


