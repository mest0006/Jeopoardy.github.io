const categories = [
  {
    title: 'Sci-Fi Stuff',
    clues: [
      {
        text: `The latex prosthetic ears worn by this 'Star Trek' actor in the late '60s even have some residual makeup left on them`,
        value: 200,
        answer: `Who is Leonard Nimoy`
      },
      {
        text: `The piece here is really green cast resin in crystal form, but in 'Superman III', it was called this, & appeared onscreen with Christopher Reeve`,
        value: 400,
        answer: `What is Kryptonite`
      },
      {
        text: `Seen in Dr. Zaius' private chambers, the Lawgiver statue from this 1968 film looks to be stone, but is actually made of cast & carved rigid polyfoam`,
        value: 600,
        answer: `What is Planet of the Apes`
      }
    ]
  },
  {
    title: 'TV Shows By Couple',
    clues: [
      {
        text: `Monica & Chandler`,
        value: 200,
        answer: `What is Friends`
      },
      {
        text: `Carrie & Mr. Big`,
        value: 400,
        answer: `What is Sex and the City`
      },
      {
        text: `Jim Halpert & Pam Beesly, who hooked up at work`,
        value: 600,
        answer: `What is The Office`
      }
    ]
  },
  {
    title: 'Mother Goose',
    clues: [
      {
        text: `They were the 'Three Men in a Tub'`,
        value: 200,
        answer: `Who is the butcher, the baker, the candlestick maker`
      },
      {
        text: `March winds & April showers brings forth these`,
        value: 400,
        answer: `What is May Flowers`
      },
      {
        text: `After 'Jack fell down and broke his crown', he 'went to bed to mend his head' using brown paper & this liquid`,
        value: 600,
        answer: `What is Vinegar`
      }
    ]
  }
]

let $board = document.getElementById('board')
let $close = document.getElementById('close')
let $overlay = document.getElementById('overlay')
let $clue = document.getElementById('clue')
let $cells = document.querySelectorAll(".cell")
let $responses = document.querySelector('.responses')
let $answer = document.getElementById('answer')


let cat = categories;
let boards = []


for (const category of categories) {
  boards.push(`<div class="category">`)
  boards.push(`<div class="title">${category.title}</div>`)

  for (const clue of category.clues) {
    boards.push(`<div class="cell" data-clue="${clue.text}" data-answer="${clue.answer}">${clue.value}</div>`)
  }
  boards.push(`</div>`)
}







$board.addEventListener('click', function (e) {
  if (e.target.classList.contains('cell')) {
    $overlay.classList.add('show')
    $answer.classList.remove('show')
    $clue.textContent = e.target.dataset.clue
    $answer.textContent = e.target.dataset.answer
    $close.textContent = 'Show Answer'
  }
})
$close.addEventListener('click', function (e) {
  if (e.target.classList.contains("button")) {
    if ($answer.classList.contains('show')) {
      $answer.classList.remove('show')
      $overlay.classList.remove('show')
    }
    else {
      $answer.classList.add('show')
      $close.textContent = "close"

    }

  }

})








$board.innerHTML = boards.join('')






