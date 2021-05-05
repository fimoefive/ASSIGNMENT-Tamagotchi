let energy = 50;

const getSleep = () => {
  $('#sleep').html(`<h1>Eat</h1>
  <div class="eat-container" id="eatProgress"></div>
    <div>
    <button type="button" class="btn btn-success" id="sleepNap">Nap</button>
    <button type="button" class="btn btn-danger" id="deepSleep">Deep Sleep</button>
    </div>
  `);
};

const sleepProgressBar = () => {
  $('#sleepProgress').html(
    `<div class="progress-bar" role="progressbar" style="width: ${energy}%" aria-valuenow="${energy}" aria-valuemin="0" aria-valuemax="100">${energy}% Energy</div>`,
  );
};

const sleepNap = () => {
  energy += 25;
  if (energy > 100) {
    energy = 100;
    sleepProgressBar();
  }
};

const deepSleep = () => {
  energy -= 5;
  if (energy < 0) {
    energy = 0;
  }
  sleepProgressBar();
};

const startSleep = () => {
  getSleep();
  sleepProgressBar();

  $('#sleepNap').on('click', sleepNap);
  $('#deepSleep').on('click', deepSleep);
};

export default startSleep;
