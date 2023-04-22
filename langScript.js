const imagine = document.getElementById('armWrapper');
  const buttonRO = document.getElementById('buttonRO');
  const buttonEN = document.getElementById('buttonEN');

  buttonRO.addEventListener('click', (event) => {
    imagine.innerHTML = '<img src="src/6934366_orig.jpg" style="transform: scale(1.2); margin-top: 30px;">';
  });
  buttonEN.addEventListener('click', (event) => {
    imagine.innerHTML = '<img src="src/repview.jfif">';
  });