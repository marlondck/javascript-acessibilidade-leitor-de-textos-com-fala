const main = document.querySelector('main')

const humanExpressions = [
  { img: './img/drink.jpg', text: 'Estou com sede'},
  { img: './img/food.jpg', text: 'Estou com fome'},
  { img: './img/tired.jpg', text: 'Estou com cansado'},
  { img: './img/hurt.jpg', text: 'Estou com machucado'},
  { img: './img/happy.jpg', text: 'Estou com feliz'},
  { img: './img/angry.jpg', text: 'Estou com raiva'},
  { img: './img/sad.jpg', text: 'Estou com triste'},
  { img: './img/scared.jpg', text: 'Estou com assustado'},
  { img: './img/outside.jpg', text: 'Quero ir lá fora'},
  { img: './img/home.jpg', text: 'Quero ir para casa'},
  { img: './img/school.jpg', text: 'Quero ir para escola'},
  { img: './img/grandma.jpg', text: 'Quero ver a vovó'},
]

const createExpressionBox = ({ img, text }) => {
  const div = document.createElement('div')

  div.classList.add('expression-box')
  div.innerHTML = `
    <img src="${img}" alt="${text}" />
    <p class="info"> ${text}</p>
  `
  main.appendChild(div)
}

humanExpressions.forEach(createExpressionBox)