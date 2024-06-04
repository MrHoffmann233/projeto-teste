x = 0
y = 0
drawCircle = ''
drawRect = ''

var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

function start() {
  document.getElementById('status').innerHTML =
    'O sistema esta ouvindo, pode falar'
  recognition.start()
}

recognition.onresult = function (event) {
  console.log(event)

  var content = event.results[0][0].transcript

  document.getElementById('status').innerHTML =
    'A fala foi reconhecida como: ' + content
  if (content == 'circle') {
    x = Math.floor(Math.random() * 900)
    y = Math.floor(Math.random() * 600)
    document.getElementById('status').innerHTML = 'Desenhando um circulo'
    drawCircle = 'set'
  }
  if (content == 'retangulo') {
    x = Math.floor(Math.random() * 900)
    y = Math.floor(Math.random() * 600)
    document.getElementById('status').innerHTML = 'Desenhando um retangulo  '
    drawRect = 'set'
  }
}

function setup() {
  canvas = createCanvas(900, 600)
}

function draw() {
  if (drawCircle == 'set') {
    radius = Math.floor(Math.random() * 100)
    circle(x, y, radius)
    document.getElementById('status').innerHTML = 'Um circulo foi desenhado. '
    drawCircle = ''
  }

  if (drawRect == 'set') {
    rect(x, y, 70, 50)
    document.getElementById('status').innerHTML = 'Um retangulo foi desenhado. '
    drawRect = ''
  }
}
