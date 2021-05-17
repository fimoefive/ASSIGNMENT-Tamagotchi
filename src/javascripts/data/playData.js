let fun = 50;

const getFun = () => {
  $('#play').html(`<h1>Play</h1>
  <div class="play-container" id="playProgress"></div>
    <div>
    <button type="button" class="btn btn-success" id="playHard">Play Hard</button>
    <button type="button" class="btn btn-info" id="playSoft">Play Soft</button>
    </div>
  `);
};

const playProgressBar = () => {
  $('#playProgress').html(
    `<div class="progress-bar" role="progressbar" style="width: ${fun}%" aria-valuenow="${fun}" aria-valuemin="0" aria-valuemax="100">${fun}% Play</div>`,
  );
};

const playHard = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  playProgressBar();
};

const playSoft = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  playProgressBar();
};

const startPlay = () => {
  getFun();
  playProgressBar();

  $('#playHard').on('click', playHard);
  $('#playSoft').on('click', playSoft);
};

export default startPlay;
