# Jetabroad Baggage Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

Step 1 : Navigate to Project Root and Install all the dependencies and packages using yarn by following command.

```
yarn install
```

Step 2 : To run the development server run following command.

```
yarn start
```

Note : By default the server will run on port 3000.

The routes are 
1. /
2. /prototype2

```
yarn run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

# Component Explanation

## Container

### App

This is the main App container. 
It contains the Router configuration. 
The routes

1. /
2. /prototype2

This imports and renders `FlightDetailPage` component and renders it with appropriate props. 
prototype = 1 -> renders the first prototype
prototype = 2 -> renders the second prototype

### FlightDetailPage
This is the main container for the Flight Detail page (Listing page).
Components imported:
1. `RightContentWrapper` -> contains the entire content(Flight Itinerary, Baggage info)
2. `LeftSideBar` -> contains the price

## Components

### CarrierLogoWrapper
This is the top part of the details page.
This includes the carrier logos

### FlightBaggageInfo
This is the first prototype of the baggage info
The layout shows the Departure city(code) and the arrival city from left-to-right so that the end user can get a much clearer visual idea of the flights. This is the most accurate representation of the flight.
The Flight duration is shown right in the middle of the flight path(Most appropriate place to show the duration)
The airline details(Name and Logo) are displayed right above the flight path.
The baggage info is a tabular structure with all the information provided by the airline.
The number of pieces and the max weight allowed has been displayed separately. 

### FlightBaggageInfoType2
This is the second prototype of the baggage info
The layout shows the Departure city(code) and the arrival city from left-to-right so that the end user can get a much clearer visual idea of the flights. This is a similar representation to the first prototype.
The Flight duration is shown right in the middle of the flight path(Most appropriate place to show the duration)
The airline details(Name and Logo) are displayed right under the flight path.
The baggage info is a tabular structure with all the information provided by the airline.
The number of pieces and the max weight allowed has been displayed separately. 

### FlightRunningInfo
This is the 2nd section from the top on the RightContentWrapper
A tabulated structure of the Flight Itinerary(Departure Date, Flight Route, Departure Time, Flight Duration)

### LeftSideBar
This component renders the Price and the Currency holder

### RightContentWrapper
This is the wrapper component for all the information displayed on the right side of the listing page.
Components imported:
1. `TopContentWrapper`
2. `FlightRunningInfo`
3. `FlightBaggageInfo`
4. `FlightBaggageInfoType2`
5. `ViewAndContinueButton`

Conditionally shows the baggage information on clicking the 'View and Continue' button.
Also, conditionally renders the different prototypes of Baggage information based on the prototype prop passed to this component

### TopContentWrapper
Wrapper for the Logos and Button
Components imported:
1. `ViewAndContinueButton`
2. `CarrierLogoWrapper`

### ViewAndContinueButton
Button component to show the baggage information. 
Trigger event -> Click

# RnD 
I looked up a number of flight booking websites in order to learn more about how the listing page is displayed.
I took note of how the various websites display the itinerary and baggage information with the search results. 
I took a decision to repeat the flight details in the baggage information section. I believe that this is a more visual way to easily represent the flight details, and the end user does not have to shift visual focus in order to have all the details and information related to that particular flight.

# Tech details
I have used 'precss' to include colors as variables in the App. They are configurable globally from one file. 

## Use Hygen Code Generator For Generating Components

Step 1: Install Hygen Globally into your system using

```
yarn add global hygen
```

I have already designed templates For making Dumb Components.

Step 3: For Instance : To Create Dumb Component. Run

```
hygen dumb new --name MyComponent
```

