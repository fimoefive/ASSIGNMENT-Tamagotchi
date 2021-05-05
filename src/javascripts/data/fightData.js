let strength = 100;

const getStrength = () => {
  $('#fight').html(`<h1>Fight</h1>
  <div class="fight-container" id="fightProgress"></div>
    <div>
    <button type="button" class="btn btn-success" id="fightRun">Run Away</button>
    <button type="button" class="btn btn-danger" id="fight-button">Fight</button>
    </div>
  `);
};

const fightProgressBar = () => {
  $('#sleepProgress').html(
    `<div class="progress-bar" role="progressbar" style="width: ${strength}%" aria-valuenow="${strength}" aria-valuemin="0" aria-valuemax="100">${strength}% Strength</div>`,
  );
};

const fightRun = () => {
  strength += 2;
  if (strength > 100) {
    strength = 100;
  }
  fightProgressBar();
};

const fight = () => {
  strength -= 5;
  if (strength < 0) {
    strength = 0;
  }
  fightProgressBar();
};

const startFight = () => {
  getStrength();
  fightProgressBar();

  $('#fightRun').on('click', fightRun);
  $('#fight-button').on('click', fight);
};

export default startFight;
