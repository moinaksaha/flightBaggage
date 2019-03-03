import React, { Component } from 'react';

import { IoIosTimer, IoMdAirplane } from 'react-icons/io';
import { FiMoon, FiSunset, FiSunrise, FiSun } from 'react-icons/fi';

import { flightDurationCalculator, departureTimeFormatter, dateFormatter } from '../../utils/helperFunctions';

// PropTypes Import
import PropTypes from 'prop-types';

// Imports from Bootstrap
import styles from './index.module.css';

const getTimeIcon = (date) => {
	const newDate = new Date(date);
	/**
	 * 0 - 5 - night
	 * 5 - 9 - sunrise
	 * 9 - 4 - afternoon
	 * 4 - 8 - evening
	 * 8 - 5 - night
	 */
	const hours = newDate.getHours();
	if(hours > 0 && hours < 5){
		return <FiMoon />;
	}else if(hours >= 5 && hours < 9){
		return <FiSunrise />;
	}else if(hours >=9 && hours < 16){
		return <FiSun />;
	}else if(hours >= 16 && hours < 20){
		return <FiSunset />;
	}else{
		return <FiMoon />;
	}
}

export default class CardImage extends Component{

	// Function to call 'toggleCardState' in CardWrapper on clicking on the top image
	// 'toggleCardState' changes the state from 'carousel' to 'cardDetail' in 'Home.js'
	showHideDetail = (e) => {
		e.stopPropagation();
		const { toggleCardState, position } = this.props;
		if(position === 0){
			toggleCardState();
		}
	}

	render = () => {

		const { cardData, position, currentCardState } = this.props;

		const { arrival, departure } = cardData;

		// Dynamically styling individual card according to it's position in the slider
		// this is based on the index value ('position') provided by the map function
		const imageStyle = {
			background: `#1cbbb0`,
			marginLeft: 60*position + 15 + 'px',
			marginRight: 60*position + 15 + 'px',
			marginTop: 20*position + 'px',
			zIndex: 999-position,
			opacity: 1 - (0.2*position),
			width: `calc(90% - ${40*position + 15}px)`,
			height: `calc(100% - ${40*position}px)`
		};

		const cardDetailClass = (currentCardState && currentCardState === "cardDetail" && position === 0) ? 
									`text-center ${styles.cardImageDiv} ${styles.fixed}` :
									`text-center ${styles.cardImageDiv}`;


		return (

			<div className={cardDetailClass} 
				 style={imageStyle}
				 onClick={this.showHideDetail}>
				 
				 <div className={`${styles.flightStops}`}>

					<div className={`${styles.stop}`}>
						<div className={`${styles.departure}`}>
							<div className={`${styles.dateTime}`}>
								{`${dateFormatter(departure.dateTime)}, ${departureTimeFormatter(departure.dateTime)}`}
							</div>
							<div className={`${styles.airportCode}`}>{departure.airportCode}</div>
							<div className={`${styles.city}`}>{departure.city}</div>
						</div>

						<div className={`${styles.helpIcon}`}>{getTimeIcon(departure.dateTime)}</div>
					</div>
					

					<div className={`${styles.flightIcon}`}>
						
						<div className={`${styles.planeIcon}`}>
							<div className={`${styles.dot}`}></div>
							<div className={`${styles.line}`}></div>
							<div className={`${styles.actualIcon}`}>
								<IoMdAirplane />
							</div>
							<div className={`${styles.line}`}></div>
							<div className={`${styles.dot}`}></div>
						</div>

						<div className={`${styles.dateTime}`}>
							<div className={`${styles.iconHolder}`}>
								<IoIosTimer />
							</div>
							<span>{flightDurationCalculator(departure, arrival)}</span>
						</div>
						
					</div>

					<div className={`${styles.stop}`}>
						<div className={`${styles.arrival}`}>
							<div className={`${styles.dateTime}`}>
								{`${dateFormatter(arrival.dateTime)}, ${departureTimeFormatter(arrival.dateTime)}`}
							</div>
							<div className={`${styles.airportCode}`}>{arrival.airportCode}</div>
							<div className={`${styles.city}`}>{arrival.city}</div>
						</div>
						<div className={`${styles.helpIcon}`}>{getTimeIcon(arrival.dateTime)}</div>
					</div>
					
				</div>
				 
			</div>

		);

	}
	
};

// props validation
CardImage.defaultProps = {
	cardData: PropTypes.array,
	position: PropTypes.number,
	currentCardState: PropTypes.string
};
