let corAtual = 'black';

function mudarCor() {
  const body = document.querySelector('body');
  if (corAtual === 'black') {
    body.style.backgroundColor = 'red';
    corAtual = 'red';
  } else {
    body.style.backgroundColor = 'black';
    corAtual = 'black';
  }
}