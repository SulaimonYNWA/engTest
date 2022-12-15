
function switchLang(lang){
    document.getElementsByClassName('flag_img')[0].src = "img/"+lang+".png"; // for mobile screens
    document.getElementsByClassName('language')[0].innerHTML = lang; // for mobile screens
    // document.getElementsByClassName('flag_img')[1].src = "img/"+lang+".png"; // for larger screens
    // document.getElementsByClassName('language')[1].innerHTML = lang; // for larger screens
}

var submit = () => {
    var name = document.getElementById('inputName').value;
    let helloName = document.querySelector('#helloName');
    helloName.style.color = 'rgb(209, 68, 228)';
    helloName.style.marginTop = '120px';
    document.getElementById('helloName').innerHTML = 'Welcome to my test, ' + name + 'jan';
    document.querySelector('#hey').style.display = 'none';
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.choice').style.display = 'block'
    document.querySelector('.main').style.display = 'none'
    if (name === "Ulugbek") {
        document.getElementById('gg').innerHTML = 'Not bad, Umarov &#128567'
    }
    else {
        document.getElementById('gg').innerHTML = 'Keep it up &#128537'
    }
}

//show the test that was clicked
var test = (test) => {
    document.querySelector('.main').style.display = 'none'
    if (test === '1') {
        document.querySelector('.vocabulary').style.display = 'block';
    }
    else if (test === '2') {
        document.querySelector('.vocabulary_2').style.display = 'block';
    }
    else if (test === '2') {
        document.querySelector('.vocabulary_3').style.display = 'block';
    }
    else {
        document.querySelector('.vocabulary_4').style.display = 'block';
    }
}

//estimate the test
var send = () => {
    var number = document.getElementById('range').value;
    if (number <= 0 || number > 10) {
        document.getElementById('feedback').innerHTML = 'be more seriouse &#128530'
    }
    else if (number < 5) {
        document.getElementById('feedback').innerHTML = 'Ok,thanks for your feedback &#128549'
    }
    else {
        document.getElementById('feedback').innerHTML = 'Great! Thank you for your feedback &#128525'
    }
    document.querySelector('#showResult').style.display = 'block';
}

//show the result on the top of screen
var showResult = () => {
    document.getElementById('score').style.display = 'block';
    document.getElementById('wordlist').style.display = 'block';
    document.querySelector('h3').style.display = 'block';
    score.style.display = 'block';
}

//show if the answer is correct or incorrect
var correct = 0;
var incorrect = 0;
var points = 0;
var score = document.getElementById('points');
function checkAnswer(isCorrect) {
    y = event.target;
    x = event.target.parentElement;
    x.style.opacity = '0.5';
    x.style.pointerEvents = 'none';
    if (isCorrect === 'incorrect') {
        y.style.backgroundColor = 'red';
        y.style.color = 'black';
        incorrect++;
        document.getElementById('incorrect').innerHTML = '- ' + incorrect;

    }
    else {
        y.style.backgroundColor = 'rgb(30, 223, 30)';
        if (isCorrect === 'correct1') {
            points += 4;
        }
        else if (isCorrect === 'correct2') {
            points += 8;
        }
        else if (isCorrect === 'correct3') {
            points += 12;
        }
        // y.style.color = 'black';
        correct++;
        document.getElementById('correct').innerHTML = correct + ' -';
        score.innerHTML = points + "/100";
    }

}



// let burger = document.querySelector('.menu_burger');
// let firstSpan = document.querySelector('.menu_burger span:nth-child(1)')
// let thirdSpan = document.querySelector('.menu_burger span:nth-child(3)')
// let secondSpan = document.querySelector('.menu_burger span:nth-child(2)')


// burger.addEventListener("click", ()=>{
//    burger.style.border = 'none';
//    secondSpan.style.display= 'none'
//    firstSpan.style.top = '4px';
//    firstSpan.style.transform = `rotate(45deg)`;
//    thirdSpan.style.transform = `rotate(-45deg)`;
//    thirdSpan.style.top = '-6px'
// })

//burger functions
let prev = document.querySelector('#prev');
const burger_content = document.querySelector('.burger_content');
const fa_menu = document.querySelector('.fa-bars');

prev.addEventListener("click", () => {
    fa_menu.style.display = 'block';
    fa_menu.style.animation = `faMenu .5s ease-in forwards`
    burger_content.style.animation = `removeMenu .5s ease-in forwards`;
    prev.style.display= 'none' ;

})
fa_menu.addEventListener("click", () => {
        prev.style.display = 'block';
        fa_menu.style.display = 'none';
        burger_content.style.display = 'block';
        burger_content.style.animation = `showMenu .5s ease-in forwards`
        prev.style.animation = `showPrev .5s ease-in forwards`


        // burger_content.style.transform = `translateX(100%)`;
        // prev.classList.add('icons');
   
})
