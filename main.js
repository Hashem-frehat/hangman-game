const letters = "abcdefghijklmnopkrstuvwxyz";

let arletters = Array.from(letters);

let letterscontainer = document.querySelector(".letters");

arletters.forEach(letter =>{

    let span = document.createElement("span");

    let theletter = document.createTextNode(letter);

    span.appendChild(theletter);

    span.className ='letter-box';
    letterscontainer.appendChild(span);



})

// ##################################

const words ={
programing:["php", "javasscript","go","scala","fortran","html","css","mysql"],
movies:["prestige","inception","parasite","interstellar","whiplash"],
people:["alpert einstein","hitchcock","alexander","cleopatra","mahatma ghandi"],
countries:["syria","jordan","yemen","palastine","qatar","bahrain"]
}

let allkeys =Object.keys(words);

let randomprop = Math.floor(Math.random() *allkeys.length);
let randompropname = allkeys[randomprop];
let randompropvalue = words[randompropname];
let randomvaluenum = Math.floor(Math.random()*randompropvalue.length);
let randomvalueval = randompropvalue[randomvaluenum];


console.log(randomvalueval.length)

document.querySelector(".game-info .category span").innerHTML = randompropname;


// ###########################################



let lettersquesscont = document.querySelector(".letterguess");

let lettersandspace = Array.from(randomvalueval);

lettersandspace.forEach(letter =>{
let empspan = document.createElement("span");
empspan.className= "letterquesss";

if (letter === ' '){
    empspan.classList.add("has-space")
}
lettersquesscont.appendChild(empspan);
});

// ###########################nafs alcood mabshta6l

let wrongletter =0;

let thedraw = document.querySelector(".hangman-draw");



let guessspans = document.querySelectorAll(".letterguess .letterquesss");
let quessletterss=document.querySelectorAll(".letterquesss");



document.addEventListener("click", (e) => {
    
    let statuss = false;

        if (e.target.className === 'letter-box') {
            e.target.classList.add("clicked");
            let letterclicked = e.target.innerHTML;


            lettersandspace.forEach((wordletters , wordindex ) =>{
                
                let counter_success = 0 ;
        if(letterclicked === wordletters) 
        {
            statuss=true;
           
            guessspans.forEach((span,indexspan) =>  {
            if(wordindex === indexspan)
            {
                span.innerHTML= letterclicked;
                
            }
            if(wordindex === indexspan)
            {
                span.innerHTML= letterclicked;
            }
            })
            
            // START
            let inputs_sucess = document.querySelectorAll('.letterquesss');


            let inputs_filled =  Array.from(inputs_sucess).filter(function(single_input){
                return (single_input.innerHTML).length > 0 
            })

            if(inputs_filled.length === randomvalueval.length)
            {
               return wingame();
            }
           else if(inputs_filled.length+1 === randomvalueval.length)
           {
              return wingame();
           }
            
          
        }
        })
        if(statuss === false)
        {
            wrongletter++;
            thedraw.classList.add(`wrong-${wrongletter}`);

            document.getElementById("fail").play();

            if(wrongletter === 8)
            {
                letterscontainer.classList.add("finshed");
                endgame();
            }
        }
        else
        {
            document.getElementById("success").play();
        }
    }
})

function endgame(){
let div = document.createElement("div");

let divtext = document.createTextNode(`game over , the word is ${randomvalueval}`  );

div.appendChild(divtext);

div.className="popup";

document.body.appendChild(div);

}
function wingame(){
    let div = document.createElement("div");
    
    let divtext = document.createTextNode(`youwin , the word is ${randomvalueval}`  );
    
    div.appendChild(divtext);
    
    div.className="popupp";
    
    document.body.appendChild(div);
    
    }



