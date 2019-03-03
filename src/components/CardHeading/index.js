import React, { Component } from 'react';

// PropTypes Imports
import PropTypes from 'prop-types';

// Imports from Bootstrap

// CSS Imports
import styles from './index.module.css';

export default class CardHeading extends Component{

	render = () => {

		const { cardData, forCardDetail } = this.props;

		// Styling based on the 'forCardDetail' prop
		const cardHeadingClassName = (forCardDetail === true) ? 
									`${styles.airlineDetailWrapper}`:
									`${styles.airlineDetailWrapper} ${styles.isNotCardDetail}`;

		return (

			<div className={cardHeadingClassName}>

				<div className={`${styles.logo}`}>

					<img src={require(`../../images/${cardData.airlineCode}.gif`)} key={cardData.airlineCode} alt={cardData.airline}/>

				</div>

				<div className={`${styles.flightAirline}`}>

					<div className={`${styles.flightNumber}`}>{`${cardData.airlineCode}-XXX`}</div>

					<div className={`${styles.airlineName}`}>{cardData.airline}</div>
					
				</div>

			</div>

		);
		
	}
	
};

CardHeading.defaultProps = {
	cardData: PropTypes.object
};
