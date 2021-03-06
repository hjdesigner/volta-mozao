/* --------------------------
 * GLOBAL VARS
 * -------------------------- */
// The date you want to count down to
const targetDate = new Date("2017/12/13 19:35:00");

// Other date related variables
let days;
let hrs;
let min;
let sec;

/* --------------------------
 * ON DOCUMENT LOAD
 * -------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Calculate time until launch date
  timeToLaunch();
  // Transition the current countdown from 0
  numberTransition('#days .number', days, 1000, 'easeOutQuad');
  numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
  numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
  numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
  // Begin Countdown
  setTimeout(countDownTimer,1001);
});

/* --------------------------
 * FIGURE OUT THE AMOUNT OF
   TIME LEFT BEFORE LAUNCH
 * -------------------------- */
const timeToLaunch = () => {
    // Get the current date
    const currentDate = new Date();

    // Find the difference between dates
    let diff = (currentDate - targetDate)/1000;
    diff = Math.abs(Math.floor(diff));

    // Check number of days until target
    days = Math.floor(diff/(24*60*60));
    sec = diff - days * 24*60*60;

    // Check number of hours until target
    hrs = Math.floor(sec/(60*60));
    sec = sec - hrs * 60*60;

    // Check number of minutes until target
    min = Math.floor(sec/(60));
    sec = sec - min * 60;
}

/* --------------------------
 * DISPLAY THE CURRENT
   COUNT TO LAUNCH
 * -------------------------- */
const countDownTimer = () => {

    // Figure out the time to launch
    timeToLaunch();

    // Write to countdown component
    document.querySelector( "#days .number" ).textContent = days;
    document.querySelector( "#hours .number" ).textContent = hrs;
    document.querySelector( "#minutes .number" ).textContent = min;
    document.querySelector( "#seconds .number" ).textContent = sec;

    // Repeat the check every second
    setTimeout(countDownTimer,1000);
}

/* --------------------------
 * TRANSITION NUMBERS FROM 0
   TO CURRENT TIME UNTIL LAUNCH
 * -------------------------- */
const numberTransition = (id, endPoint) => {
  let initial_number = 0;

  const interval = setInterval(() => {
    if (initial_number < endPoint) {
      initial_number ++;
      document.querySelector(id).textContent = initial_number;
    } else if (initial_number === endPoint) {
      clearInterval(interval);
    };
  }, 10);
};