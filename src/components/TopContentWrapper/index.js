// @flow
import React, { Component } from 'react'
import styles from './index.module.css';

import CarrierLogoWrapper from '../CarrierLogoWrapper';
import ViewAndContinueButton from '../ViewAndContinueButton';

class Topcontentwrapper extends Component {
    render() {
        const { flightsData, handleClick } = this.props;
        return (
            <div className={`${styles.topContentWrapper}`}>
                <CarrierLogoWrapper flightsData={flightsData}/>
                <div className={`${styles.buttonSize}`}>
                    <ViewAndContinueButton handleClick={handleClick}/>
                </div>
            </div>
        );
    }
};

export default Topcontentwrapper


