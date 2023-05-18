const weight = document.getElementById('weight')
const height = document.getElementById('height')


document.getElementById("calcButton").addEventListener('click', function () {
  const weightValue = parseFloat(weight.value)
  const heightValue = parseFloat(height.value)
  const imc = weightValue / (heightValue * heightValue)
  const showImc = document.getElementById('showImc')
  const textImc = document.getElementById('textImc')
  showImc.innerText = imc
})