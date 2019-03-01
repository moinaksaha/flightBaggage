export const dateFormatter = (date) => {
    const newDate = new Date(date);
    // console.log("date", newDate)
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

    return `${newDate.getDate()} ${months[newDate.getMonth()]}`;
}

export const flightPathFormatter = (departure, arrival) => {
    return `${departure.city}(${departure.airportCode}) to ${arrival.city}(${arrival.airportCode})`
}

export const departureTimeFormatter = (timeStamp) => {
    const date = new Date(timeStamp);

    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // const ampm = hours >= 12 ? 'PM' : 'AM';
    // hours = hours % 12;
    // hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes = minutes < 10 ? '0'+minutes : minutes;
    // return `${hours}:${minutes} ${ampm}`;

    return date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
}

export const flightDurationCalculator = (departure, arrival) => {
    const departureTime = new Date(departure.dateTime);
    const arrivalTime = new Date(arrival.dateTime);

    let timeDiff = Math.abs(departureTime - arrivalTime);

    let hh = Math.floor(timeDiff / 1000 / 60 / 60);

    if(hh < 10) {
        hh = '0' + hh;
    }
    
    timeDiff -= hh * 1000 * 60 * 60;
    let mm = Math.floor(timeDiff / 1000 / 60);
    if(mm < 10) {
        mm = '0' + mm;
    }

    return `${hh}h ${mm}m`
}