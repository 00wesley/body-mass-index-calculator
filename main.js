

const BMIcalculation = () => {
  let weight = document.getElementById('weight').value
  let height = document.getElementById('height').value
  const text = document.getElementById('textImc')
  
  if(weight !== '' && height !== '') {
    const imc = (weight / (height * height)).toFixed(1)
    const situation = ''

    if(imc < 18.5) {
      text.innerText = `Seu imc é ${imc}
      Tome cuidado, você esta a baixo do peso.`
      weight.value = ""
      height.value = ""
    } else if (imc < 25) {
      text.innerText = `Seu imc é ${imc}
      Parabéns, você esta no peso ideal.`
      weight.value = ""
      height.value = ""
    } else if (imc < 30) {
      text.innerText = `Seu imc é ${imc}
      Cuidado, está levemente acima peso ideal.`
      weight.value = ""
      height.value = ""
    } else if (imc < 35) {
      text.innerText = `Seu imc é ${imc}
      Cuidado, está acima peso ideal, com obecisade em grau I`
      weight.value = ""
      height.value = ""
    } else if (imc < 40) {
      text.innerText = `Seu imc é ${imc}
      Cuidado, está acima peso ideal, com obecisade em grau II`
      weight.value = ""
      height.value = ""
    } else {
      text.innerText = `Seu imc é ${imc}
      Muito cuidado, está muito acima peso ideal, com obecisade em grau III`
      weight.value = ""
      height.value = ""
    }    
  } else {
    alert('Para que o calculo seja feito é nescessario preencher todos os campos.')
  }

weight.value = ""
height.value = ""
}

const calcBtn = document.getElementById('calcButton')

calcBtn.addEventListener('click', BMIcalculation)

