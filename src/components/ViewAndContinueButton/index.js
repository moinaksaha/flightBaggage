// @flow
import React, { Component } from 'react'
import styles from './index.module.css'

class Viewandcontinuebutton extends Component {
    
    handleButtonClick = () => {
        const { handleClick } = this.props;
        handleClick();
    }

    render() {
        return (
            <div className={`${styles.viewAndContinueButton}`}>
                <button onClick={this.handleButtonClick}>
                    View Flight Times and Continue
                </button>
            </div>
        );
    }
};

export default Viewandcontinuebutton


