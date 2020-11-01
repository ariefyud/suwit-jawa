function getComputer() {
  const comp = Math.round(Math.random() * 10);
  if (comp < 4) return 'gajah';
  if (comp >= 4 && comp < 7) return 'orang';
  return 'semut';
}

function getResult(comp, p) {
  if (p == comp) return 'SERI!';
  if (p == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (p == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
  if (p == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

function roll() {
  const compImg = document.querySelector('.comp-img');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const startTime = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }
    compImg.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
let win = 1;
let lose = 1;

pilihan.forEach((pil) => {
  pil.addEventListener('click', () => {
    const compTurn = getComputer();
    const playerTurn = pil.className;
    const result = getResult(compTurn, playerTurn);

    roll();

    setTimeout(() => {
      const imgComp = document.querySelector('.comp-img');
      imgComp.setAttribute('src', 'img/' + compTurn + '.png')
      const info = document.querySelector('.info');
      info.innerHTML = result;

      const compSkor = document.querySelector('.compSkor');
      const playerSkor = document.querySelector('.playerSkor');

      if (result == 'KALAH!') {
        compSkor.innerHTML = lose++;
      }
      if (result == 'MENANG!') {
        playerSkor.innerHTML = win++;
      }

    }, 1000);
  });
});