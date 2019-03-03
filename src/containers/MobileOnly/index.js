/*
	=========================================================
	CONTAINER NAME: Home
	FUNCTION: Returns the Home page of the application which has the form, error message, submission successful message, LoaderModal component
	PROPS:  checkBoxID -> 'id' of the checkbox element
			setCheckedValue -> method to set the current checked value of the checkbox on the parent 
			labelText -> label to display with the checkbox
			checkBoxName ->	name for the checkbox
	=========================================================
*/

import React, { Component } from 'react';

// Imports from Bootstrap
// import { Row, Col } from 'react-bootstrap';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

import data from '../../data/result_data.json';

// Import style from Home.css file
import styles from './index.module.css';

// Importing the other components for the page
import CardWrapper from '../../components/CardWrapper';
import CardBottomPart from '../../components/CardBottomPart'

// import BackButton from '../../components/UtilityComponent/BackButton';
// import BottomBar from '../../components/UtilityComponent/BottomBar';
import FlashMessage from '../../components/FlashMessage';

export default class MobileOnly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCardIndex: 0,
      allCardData: data.flights, //data.flights
      currentCardState: "carousel", // "cardDetail"
      currentSwipeDirection: "left",
      showGalleryEndMessage: false
    }
  }

  // FUNCTION TO SHOW AND HIDE THE FLASH MESSAGE WHEN USER REACHES THE END OF THE SLIDER
  showFlashMessage = () => {
    this.setState({
      showGalleryEndMessage: true
    })
    setTimeout(() => {
      this.setState({
        showGalleryEndMessage: false
      })
    }, 2000)
  }

  // FUNCTION TO GO TO THE NEXT CARD 
  // If the user is at the end of the slider, show the flash message 
  // Otherwise, increment the 'currentCardIndex' by 1
  prevCard = () => {
    if(this.state.currentCardIndex > 0){
      this.setState((prevState) => ({
        currentSwipeDirection: "right",
        currentCardIndex: prevState.currentCardIndex - 1
      }))
    }else{
      this.showFlashMessage();
    }
  }

  // FUNCTION TO GO TO THE PREVIOUS CARD 
  // If the user is at the end of the slider, show the flash message 
  // Otherwise, decrement the 'currentCardIndex' by 1
  nextCard = () => {
    if(this.state.currentCardIndex < this.state.allCardData.length-1){
      this.setState((prevState, props) => ({
        currentSwipeDirection: "left",
        currentCardIndex: prevState.currentCardIndex + 1
      }));
    }else{
      this.showFlashMessage();
    }
  }

  // FUNCTION TO TOGGLE THE CARD STATE IN BETWEEN 'cardDetail' and 'carousel'
  // This decides if to show the 'Card Detail' or the 'Slider'
  toggleCardState = () => {
    this.setState((prevState) => ({
      currentCardState: (prevState.currentCardState === "carousel") ? "cardDetail" : "carousel"
    }))
  }

  render() {

    return (

      <div className={`${styles.mainWrapper}`}>

        {/* Wrapper for the Slider and Title */}
        {/* <div> */}

        <CardWrapper allCardData={this.state.allCardData}
                        moinakData={data.flights}
                       currentCardIndex={this.state.currentCardIndex}
                       toggleCardState={this.toggleCardState}
                       currentCardState={this.state.currentCardState}
                       nextCard={this.nextCard}
                       prevCard={this.prevCard}
                       swipeDirection={this.state.currentSwipeDirection} />
                    
        {/* </div> */}

        {/* Holder for the card detail in the bottom to slide out into view later */}
        

        {/* Navigation buttons for devices without TOUCH support */}
        <div className={`${styles.navigationTest}`}>

          <div className={`${styles.prev}`}
               onClick={this.prevCard}> 
            <IoIosArrowDropleft />
          </div>

          {/* Flash message when user reaches the end of the Slider */}
          {this.state.showGalleryEndMessage && 

            <div className={`${styles.flashMessageHolder}`}>
              
              <FlashMessage text={`You've reached the end!`} />

            </div>

          }

          <div className={`${styles.next}`}
               onClick={this.nextCard}> 
            <IoIosArrowDropright />
          </div>

        </div>

        <CardBottomPart allCardData={this.state.allCardData}
                        moinakData={data.flights}
                        currentCardIndex={this.state.currentCardIndex}
                        currentCardState={this.state.currentCardState}
                        toggleCardState={this.toggleCardState}/>

      </div>

    )

  }

}
