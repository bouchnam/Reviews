// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let faChevronLeft = document.querySelector(".fa-chevron-left")
let faChevronRight = document.querySelector(".fa-chevron-right")
let randomBtn = document.querySelector(".random-btn")
let fas = document.querySelector(".fas")

let author = document.getElementById("author")
let job = document.getElementById("job")
let info = document.getElementById("info")
let imgContainer = document.querySelector(".img-container")

let id = 0

window.addEventListener("DOMContentLoaded", function () {
  imgContainer.innerHTML = `<img src=${reviews[id].img} id="person-img" alt="" />`
  author.textContent = reviews[id].name
  job.textContent = reviews[id].job
  info.textContent = reviews[id].text
})

function change(person) {
  author.textContent = reviews[person].name
  job.textContent = reviews[person].job
  info.textContent = reviews[person].text
  imgContainer.innerHTML = `<img src=${reviews[person].img} id="person-img" alt="" />`
}


faChevronRight.addEventListener("click", function () {
  id++ 
  if (id > reviews.length -1) {
    id = 0
  }
  change(id)
})

faChevronLeft.addEventListener("click", function () {
  id--
  if (id < 0){
    id = reviews.length - 1
  }
  change(id)
})

randomBtn.addEventListener("click", function(){
  let person = Math.floor(Math.random() * 4)
  change(person)
})
