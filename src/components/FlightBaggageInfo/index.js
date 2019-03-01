// @flow
import React, { Component } from 'react';
import posed from 'react-pose';
import styles from './index.module.css';

import { IoIosAirplane, IoIosTimer } from 'react-icons/io';

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

const Posed = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});

class Flightbaggageinfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isVisible: !this.state.isVisible
            });
        }, 300);
    }

    render() {

        const { isVisible } = this.state;

        const { flightsData } = this.props;

        return (
            <Posed pose={isVisible ? 'visible' : 'hidden'} >
                <div className={`${styles.baggageInfoWrapper}`}>
                    {flightsData.map((item, index) => {
                        const { arrival, departure, baggage } = item;
                        const imgSrc = require(`../../images/${item.airlineCode}.gif`);
                        const logoStyle = {
                            backgroundImage: 'url(' + imgSrc + ')',
                            backgroundPosition: `center center`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: `cover`,
                            height: 20,
                            width: 60,
                        }
                        return(
                            <div className={`${styles.individualBaggageInfoWrapper}`} key={index}>
                                <div className={`${styles.airlineNameLogo}`}>
                                    <div>{item.airline}</div>
                                    <div style={logoStyle}></div>
                                </div>
                                <div className={`${styles.flightStops}`}>
                                    <div className={`${styles.departure}`}>
                                        <div className={`${styles.dateTime}`}>
                                            {`${dateFormatter(departure.dateTime)}, ${departureTimeFormatter(departure.dateTime)}`}
                                        </div>
                                        <div className={`${styles.airportCode}`}>{departure.airportCode}</div>
                                        <div className={`${styles.city}`}>{departure.city}</div>
                                    </div>

                                    <div className={`${styles.flightIcon}`}>
                                        <div className={`${styles.dateTime}`}>
                                            <div className={`${styles.iconHolder}`}>
                                                <IoIosTimer />
                                            </div>
                                            <span>{flightDurationCalculator(departure, arrival)}</span>
                                        </div>
                                        <div className={`${styles.planeIcon}`}>
                                            <div className={`${styles.dot}`}></div>
                                            <div className={`${styles.line}`}></div>
                                            <div className={`${styles.actualIcon}`}>
                                                <IoIosAirplane />
                                            </div>
                                            <div className={`${styles.line}`}></div>
                                            <div className={`${styles.dot}`}></div>
                                        </div>
                                        
                                    </div>

                                    <div className={`${styles.arrival}`}>
                                        <div className={`${styles.dateTime}`}>
                                            {`${dateFormatter(arrival.dateTime)}, ${departureTimeFormatter(arrival.dateTime)}`}
                                        </div>
                                        <div className={`${styles.airportCode}`}>{arrival.airportCode}</div>
                                        <div className={`${styles.city}`}>{arrival.city}</div>
                                    </div>
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
                        )
                    })}
                </div>
            </Posed>
        );
    }
};

export default Flightbaggageinfo;


