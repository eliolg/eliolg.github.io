//Photo big
$(document).ready(function(){
      $(".img-move").animate({left: '-100%'}, 500);
  });

  $(document).ready(function(){
    $(".text-move").animate({left: '100%'}, 500);
});


//Timeline

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller();

allBoxes.forEach(box => {
    
    for (i = 0; i < allRonds.length; i++) {

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y:-100, opacity:0, duration:0.5});

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
            .setTween(tween)
            .addIndicators()
            .addTo(controller)
        }
    }
});


//Intersection Observer

const images = document.querySelectorAll
('.images-container img')


let options = {
    //root:null
    rootMargin: "-20% 0px", // On declenche l'anim 100px plus tard que le trigger
    threshold: 0,
}

function handleIntersect(entries){
    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
        }
    })
}

const observer = new IntersectionObserver
(handleIntersect, options)

images.forEach(image => {
    observer.observe(image)
})

//competences
function barIntersect(entries){
    console.log(entries);

    entries.forEach(entry =>{
        if(entry.isIntersecting & entry.target.className == "bar1"){
            entry.target.classList.add('htmlCSS');
        }
        if(entry.isIntersecting & entry.target.className == "bar2"){
            entry.target.classList.add('PythonJava');
        }
        if(entry.isIntersecting & entry.target.className == "bar3"){
            entry.target.classList.add('Langues');
        }
        if(entry.isIntersecting & entry.target.className == "bar4"){
            entry.target.classList.add('Mecatronique');
        }
        if(entry.isIntersecting & entry.target.className == "bar5"){
            entry.target.classList.add('Animation');
        }
        if(entry.isIntersecting & entry.target.className == "bar6"){
            entry.target.classList.add('CATIAV5');
        }
    });
}

const observer2 = new IntersectionObserver(barIntersect)

const bars = document.querySelectorAll('#bar')


bars.forEach(bar => {
    observer2.observe(bar)
})
