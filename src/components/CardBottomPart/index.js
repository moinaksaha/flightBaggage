import React, { Component } from 'react';

// Import Swipeable 
// Reference - https://github.com/dogfessional/react-swipeable
import { Swipeable } from 'react-swipeable';

// TransitionGroup Imports
// Reference - https://github.com/reactjs/react-transition-group/tree/v1-stable
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Component Imports
// import BackButton from '../BackButton';
import CardBottomPartContent from '../CardBottomPartContent';
// import CardBottomPartCalendar from '../CardBottomPartCalendar';

// CSS Imports
import styles from './index.module.css';

class CardBottomPart extends Component{

	constructor(){
		super();
		// Initial state - empty array
		this.state = {
			currentCardData : [] 
		}
	}

	// Set or unset card detail on recieving 'currentCardState' prop
	// calls 'setCardDetailData' or 'unsetCardDetailData' accordingly
	componentWillReceiveProps = (nextProps) => {
		if(nextProps.currentCardState && nextProps.currentCardState === "cardDetail"){
			this.setCardDetailData();
		}else{
			this.unsetCardDetailData();
		}
	}

	// Sets the current card data to the state after a delay of 200ms
	// this is necessary for the animation delay effect
	// when the card detail view is entered
	setCardDetailData = () => {
		setTimeout(() => {
			this.setState((prevState, props) => ({
				currentCardData: props.allCardData.slice(props.currentCardIndex, props.currentCardIndex+1)
			}))
		}, 200)
	}

	// Unset the card detail to empty array
	// when the card detail view is exited
	unsetCardDetailData = () => {
		this.setState((prevState) => ({
			currentCardData: []
		}))
	}

	// get out of the card detail view
	// by calling 'toggleCardState' function in the props
	hideCardDetail = (e) => {
		e.stopPropagation();
		const { toggleCardState } = this.props;
		toggleCardState();
	}

	// handles swipe down on the card detail view
	// Function called when a 'swipe' event is performed on the card detail div
    // Checks of the swipe distance is greater than a particular threshold(here 40px).
	// Then calls 'toggleCardState' 
	swiped = ({ event, deltaX, deltaY, velocity }) => {
        if(deltaY < -40){
            const { toggleCardState } = this.props;
            toggleCardState();
        }
	}
	
	// function to prevent event propagation
	preventEventPropagation = (e) => {
		e.stopPropagation();
	}

	render = () => {

		const { currentCardState } = this.props;

		const cardClass = (currentCardState && currentCardState === "cardDetail") ?

							`${styles.cardDetailWrapper} ${styles.visible}` : 

							`${styles.cardDetailWrapper}`;

		return (

			<Swipeable onSwiped={this.swiped}>

				<div className={cardClass}
					onClick={this.hideCardDetail}>
	
					<div className={`${styles.cardContentHolder}`}
						onClick={this.preventEventPropagation}>

						<TransitionGroup>

							{(this.state.currentCardData.map((object, i) => {

								return(

									<CSSTransition
										key={object.airlineCode}
										classNames={{
											enter: `${styles.enter}`,
											enterActive: `${styles.enterActive}`,
											exit: `${styles.leave}`,
											exitActive: `${styles.leaveActive}`
										}}
										timeout={300}>

										<div className={`${styles.bottomDataHolder}`}>
											<div className={`${styles.heading}`}>Flight Details</div>

											<CardBottomPartContent 
												cardData={object}
											/> 

										</div>

									</CSSTransition>

								)

							}))}
							
						</TransitionGroup>

					</div>

				</div>

			</Swipeable>

		);

	}
	
};

export default CardBottomPart;
