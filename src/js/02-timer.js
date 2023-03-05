import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const textInput = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]')
const daysCom = document.querySelector('[data-days]');
const hoursCom = document.querySelector('[data-hours]');
const minCom = document.querySelector('[data-minutes]');
const secCom = document.querySelector('[data-seconds]');

buttonStart.addEventListener('click', onButtonStartClick);

let userDate = null;
const currentDate = Date.now();
buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userDate = selectedDates[0].getTime();
    if (userDate - currentDate >= 0) {
      buttonStart.disabled = false;
    } else {
      Notiflix.Notify.info('Please choose a date in the future'),
      (buttonStart.disabled = true);
    }
  },
};

flatpickr(textInput, options);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function onButtonStartClick() {
  timer.start();
}

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const counterDate = userDate - Date.now();
      const timerComponents = convertMs(counterDate);
      updateComponents(timerComponents);
    }, 1000);
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateComponents ({ days, hours, minutes, seconds}) {
  daysCom.textContent = `${days}`;
  hoursCom.textContent = `${hours}`;
  minCom.textContent = `${minutes}`;
  secCom.textContent = `${seconds}`;
}

