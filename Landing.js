
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
  });

  splide.mount();


});

const stude = document.getElementById("stude");
const studpop = document.getElementsByClassName("studepop")[0]
const exit = document.getElementById("studexit")
stude.addEventListener('click',() =>{
  studpop.classList.add("open");
})

exit.addEventListener('click', () =>{
  studpop.classList.remove("open");
})

const dehdashti = document.getElementById("dehdashti");
const dehdashtipop = document.getElementsByClassName("dehdashtipop")[0]
const dehdashtiexit = document.getElementById("dehdashtiexit")
dehdashti.addEventListener('click',() =>{
  dehdashtipop.classList.add("open");
})

dehdashtiexit.addEventListener('click', () =>{
  dehdashtipop.classList.remove("open");
})

dehdashtipop.addEventListener('click',()=>{
  dehdashtipop.classList.remove("open");
})

const sync = document.getElementById("sync");
const syncpop = document.getElementsByClassName("syncpop")[0]
const syncexit = document.getElementById("syncexit")
sync.addEventListener('click',() =>{
  syncpop.classList.add("open");
})

syncexit.addEventListener('click', () =>{
  syncpop.classList.remove("open");
})

const snatch = document.getElementById("snatch");
const snatchpop = document.getElementsByClassName("snatchpop")[0]
const snatchexit = document.getElementById("snatchexit")
snatch.addEventListener('click',() =>{
  snatchpop.classList.add("open");
})

snatchexit.addEventListener('click', () =>{
  snatchpop.classList.remove("open");
})