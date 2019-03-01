// @flow
import React, { Component } from 'react';
import styles from './index.module.css';

import { IoIosTimer } from 'react-icons/io';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';

import { flightDurationCalculator, departureTimeFormatter, dateFormatter } from '../../utils/helperFunctions';
// import { url } from 'inspector';

const getBaggageWeight = (baggage, type) => {

    if(baggage && baggage[type] && baggage[type].weight && baggage[type].weight.kilograms){
        return `${baggage[type].weight.kilograms} kgs`
    }
    return `-`;
}

const getBaggagePieces = (baggage, type) => {
    if(baggage && baggage[type] && baggage[type].piece){
        return `${baggage[type].piece} piece(s)`
    }
    return `-`;
}

class FlightBaggageInfoType2 extends Component {
    render() {
        const { flightsData } = this.props;
        return (
            <div className={`${styles.baggageInfoWrapper}`}>
                {flightsData.map((item, index) => {
                    const { arrival, departure, baggage } = item;
                    const imgSrc = require(`../../images/${item.airlineCode}.gif`);
                    const logoStyle = {
                        backgroundImage: 'url(' + imgSrc + ')',
                        backgroundPosition: `center center`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        height: 40,
                        width: 120,
                    }
                    return(
                        <div className={`${styles.individualBaggageInfoWrapper}`} key={index}>
                            
                            <div className={`${styles.flightPath}`}>
                                <div className={`${styles.departure}`}>
                                    <div className={`${styles.airport}`}>
                                        <div className={`${styles.city}`}>{`${departure.city}`}</div>
                                        <div className={`${styles.airportCode}`}>{departure.airportCode}</div>  
                                        <div className={`${styles.dateTime}`}>
                                            {`${dateFormatter(departure.dateTime)}, ${departureTimeFormatter(departure.dateTime)}`}
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className={`${styles.planeIcon}`}>
                                    <div className={`${styles.icon}`}> <FaPlaneDeparture /></div>
                                    <div className={`${styles.line}`}></div>
                                    <div className={`${styles.duration}`}>
                                        <div className={`${styles.iconHolder}`}>
                                            <IoIosTimer />
                                        </div>
                                        <span>{flightDurationCalculator(departure, arrival)}</span>
                                    </div>
                                    <div className={`${styles.line}`}></div>
                                    <div className={`${styles.icon}`}><FaPlaneArrival /></div>
                                </div>

                                <div className={`${styles.arrival}`}>
                                    <div className={`${styles.airport}`}>
                                        {/* <div><FaPlaneArrival /></div> */}
                                        <div className={`${styles.city}`}>{`${arrival.city}`}</div>  
                                        <div className={`${styles.airportCode}`}>{arrival.airportCode}</div>
                                        <div className={`${styles.dateTime}`}>
                                            {`${dateFormatter(arrival.dateTime)}, ${departureTimeFormatter(arrival.dateTime)}`}
                                        </div>
                                    </div>
                                </div>  
                            </div>

                            <div className={`${styles.airlineBaggage}`}>
                                <div className={`${styles.airlineNameLogo}`}>
                                        <div style={logoStyle}></div>
                                        <div>{item.airline}</div>
                                </div>
                                <div className={`${styles.baggageDataWrapper}`}>
                                    <div className={`${styles.baggageDataHeading}`}>
                                        <div>Baggage Info</div>
                                        <div>Allowed Weight</div>
                                        <div>Allowed Piece(s)</div>
                                    </div>
                                    <div>
                                        <div className={`${styles.baggageData}`}>
                                            <div>Carry On</div>
                                            <div>{getBaggageWeight(baggage, `carryOn`)}</div>
                                            <div>{getBaggagePieces(baggage, `carryOn`)}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${styles.baggageData}`}>
                                            <div>Check In</div>
                                            <div>{getBaggageWeight(baggage, `checkedBag`)}</div>
                                            <div>{getBaggagePieces(baggage, `checkedBag`)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`${styles.helpText}`}> ' - ' : No information provided by the airline</div>

                        </div>
                    )
                })}
            </div>
        );
    }
};

export default FlightBaggageInfoType2;


