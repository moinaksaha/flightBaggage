// @flow
import React, { Component } from 'react'
import styles from './index.module.css';

import TopContentWrapper from '../TopContentWrapper';
import FlightRunningInfo from '../FlightRunningInfo';
import FlightBaggageInfo from '../FlightBaggageInfo';
import FlightBaggageInfoType2 from '../FlightBaggageInfoType2';
import ViewAndContinueButton from '../ViewAndContinueButton';

class Rightcontentwrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            showBaggageInfo: false
        }
    }

    toggleBaggageInfo = () => {
        this.setState({
            showBaggageInfo: true
        })
    }
    render() {
        const { flightsData, prototype } = this.props;
        const { showBaggageInfo } = this.state;

        return (
            <div className={`${styles.rightContentWrapper}`}>
                <div className={`${styles.rightContentHolder}`}>
                    <div className={`${styles.topContentWrapper}`}>
                        <TopContentWrapper flightsData={flightsData} handleClick={this.toggleBaggageInfo}/>
                    </div>
                    <FlightRunningInfo flightsData={flightsData}/>
                    <div className={`${styles.smallScreenViewAndContinue}`}>
                        <ViewAndContinueButton  handleClick={this.toggleBaggageInfo}/>
                    </div>

                    { showBaggageInfo ? (
                        prototype && prototype===2 ?
                            <FlightBaggageInfoType2 flightsData={flightsData}/>:
                            <FlightBaggageInfo flightsData={flightsData}/>
                    ) : (
                        null
                    )}

                </div>
            </div>
        );
    }
};

export default Rightcontentwrapper


