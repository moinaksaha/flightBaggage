import React, { Component } from 'react';
import styles from './index.module.css';

import LeftSideBar from '../../components/LeftSideBar';
import RightContentWrapper from '../../components/RightContentWrapper';

import data from '../../data/result_data.json';

class FlightDetailPage extends Component {
  render() {
    const { prototype } = this.props;
    const { currency, flights, price } = data;

    // console.log(data)
    return (
      <div className={`${styles.flightDetailWrapper}`}>
        <LeftSideBar currencyCode={currency} amount={price} />
        <RightContentWrapper flightsData={flights} prototype={prototype}/>
      </div>
    );
  }
}

export default FlightDetailPage;
