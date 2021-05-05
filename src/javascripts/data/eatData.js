let full = 100;

const getFull = () => {
  $('#eat').html(`<h1>Eat</h1>
  <div class="eat-container" id="eatProgress"></div>
    <div>
    <button type="button" class="btn btn-success" id="healthyFood">Healthy Food</button>
        <button type="button" class="btn btn-danger" id="junkFood">Junk Food</button>
    </div>
  `);
};

const eatProgressBar = () => {
  $('#eatProgress').html(
    `<div class="progress-bar" role="progressbar" style="width: ${full}%" aria-valuenow="${full}" aria-valuemin="0" aria-valuemax="100">${full}% Full</div>`,
  );
};

const eatHealthy = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
  eatProgressBar();
};

const eatJunk = () => {
  full -= 5;
  if (full < 0) {
    full = 0;
  }
  eatProgressBar();
};

const startEat = () => {
  getFull();
  eatProgressBar();

  $('#healthyFood').on('click', eatHealthy);
  $('#junkFood').on('click', eatJunk);
};

export default startEat;
