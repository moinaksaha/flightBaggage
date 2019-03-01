// @flow
import React, { Component } from 'react'
import styles from './index.module.css'

class Leftsidebar extends Component {
    render() {
        const { currencyCode, amount } = this.props;
        return (
            <div className={`${styles.leftSideBar}`}>
                <div className={`${styles.priceHolder}`}>
                    <div className={`${styles.currencyCode}`}>{`${currencyCode}`}</div>
                    <div className={`${styles.amount}`}>{`$ ${amount}`}</div>
                </div>
            </div>
        );
    }
};

export default Leftsidebar


