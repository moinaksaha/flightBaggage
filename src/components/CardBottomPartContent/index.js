import React, { Component } from 'react';

// PropTypes Imports
import PropTypes from 'prop-types';

// CSS Imports
import styles from './index.module.css';

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

export default class CardBottomPartContent extends Component{

	render() {

		const { cardData } = this.props;

		return (

			<div className={`${styles.cardDetailTopPart}`}>

				<div className={`${styles.heading}`}>Baggage Info</div>

				<div className={`${styles.baggageDataWrapper}`}>
					<div className={`${styles.baggageDataHeading}`}>
						<div>Type</div>
						<div>Allowed Weight</div>
						<div>Allowed Piece(s)</div>
					</div>
					<div>
						<div className={`${styles.baggageData}`}>
							<div>Carry On</div>
							<div>{getBaggageWeight(cardData.baggage, `carryOn`)}</div>
							<div>{getBaggagePieces(cardData.baggage, `carryOn`)}</div>
						</div>
					</div>
					<div>
						<div className={`${styles.baggageData}`}>
							<div>Check In</div>
							<div>{getBaggageWeight(cardData.baggage, `checkedBag`)}</div>
							<div>{getBaggagePieces(cardData.baggage, `checkedBag`)}</div>
						</div>
					</div>
				</div>

				<div className={`${styles.helpText}`}> ' - ' : No information provided by the airline</div>

			</div>

		);

	}
	
};

// props validation
CardBottomPartContent.defaultProps = {
	cardData: PropTypes.object
};
