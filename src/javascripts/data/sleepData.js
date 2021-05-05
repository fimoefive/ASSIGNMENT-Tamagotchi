let energy = 33;

const getSleep = () => {
  $('#sleep').html(`<h1>Sleep</h1>
  <div class="progress-container" id="sleepProgress"></div>
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
  energy += 10;
  if (energy > 100) {
    energy = 100;
  }
  sleepProgressBar();
};

const deepSleep = () => {
  energy += 25;
  if (energy > 100) {
    energy = 100;
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
