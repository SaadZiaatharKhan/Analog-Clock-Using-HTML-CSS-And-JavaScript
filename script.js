const hourDiv = document.getElementById('hour')
const minuteDiv = document.getElementById('minute')
const secondDiv = document.getElementById('second')

setInterval(updateClock, 1000);

function updateClock() {

    let date = new Date();
    let second = date.getSeconds()/60;
    let minute = (date.getMinutes()+second)/60;
    let hour = (date.getHours()+minute)/12;

    secondDiv.style.transform = `rotate(${second*360}deg)`;
    minuteDiv.style.transform = `rotate(${minute*360}deg)`;
    hourDiv.style.transform = `rotate(${hour*360}deg)`;

}

/*

Calculations :

    For Second Hand :

        1 rotation -> 60 sec
        60 sec -> 360 deg
        1 sec  -> 6 deg
        n sec  -> n*6 deg

        rotation of second hand in nth second -> n*6 deg
        
    For Minute Hand :

        60 sec -> 1 minute
        1 sec -> 1/60 minute
        n sec -> (n/60) minute

        1 rotation -> 60 min
        60 min -> 360 deg
        1 minute -> 6 deg
        m minute -> m*6 deg

        m minute n second -> (m + n/60) minute

        rotation of minute hand in mth minute nth second -> (m + n/60)*6 deg

    For Hour Hand :

        60 sec -> 1 minute
        1 sec -> 1/60 minute
        n sec -> (n/60) minute

        60 minute -> 1 hour
        1 minute -> 1/60 hour
        m minute -> m/60 hour

        m minute n second -> (m + n/60)/60 hour

        1 rotation -> 12 hours
        12 hours -> 360 deg
        1 hour   -> 30 deg
        p hour   -> p*30 deg

        p hour m minute n second -> (p + (m + n/60)/60) hour

        rotation of hour hand in pth hour mth minute nth second -> (p + (m + n/60)/60)*30 deg

 */