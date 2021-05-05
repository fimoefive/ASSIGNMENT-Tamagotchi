import startEat from './data/eatData';
import startPlay from './data/playData';
import startFight from './data/fightData';
import startSleep from './data/sleepData';
import '../styles/main.scss';

// const printToDom = (divId, printText) => {
//   const selectedDiv = document.querySelector(divId);
//   selectedDiv.innerHTML = printText;
// };

// const domStringBuilder = (array) => {
//   let domString = "";
//   array.forEach()
// };

const init = () => {
  startEat();
  startPlay();
  startFight();
  startSleep();
};

init();
