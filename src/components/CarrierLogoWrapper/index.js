// @flow
import React, { Component } from 'react'
import styles from './index.module.css'

class Carrierlogowrapper extends Component {
    render() {
        const { flightsData } = this.props;
        return (
            <div className={`${styles.carrierLogoWrapper}`}>
                {flightsData.map((item) => {
                    const { airlineCode, airline } = item;
                    return (
                        <img src={require(`../../images/${airlineCode}.gif`)} key={airlineCode} alt={airline}/>
                    )
                })}
            </div>
        );
    }
};

export default Carrierlogowrapper


