var EnglishTest = {};
EnglishTest.startButton = document.getElementById('startbutton');
EnglishTest.translation = document.getElementById('translation');
EnglishTest.canvas = document.getElementById('canvas');
EnglishTest.submit = document.getElementById('submitButton');
EnglishTest.tracker = document.getElementById('tracker');
EnglishTest.ctx = EnglishTest.canvas.getContext("2d");

EnglishTest.startButton = $('#startbutton').show();
EnglishTest.translation = $('#translation').hide();
EnglishTest.submit = $('#submitButton').hide();
EnglishTest.tracker = $('div.tracker').hide();
EnglishTest.ctx.font = "20px serif";
EnglishTest.ctx.fillText("Тут будут слова для перевода", 40,100);
EnglishTest.countCorrect = 0;
EnglishTest.countIncrorrect = 0;
EnglishTest.correctAnsw = $('#correctAnsw');
EnglishTest.incorrectAnsw = $('#incorrectAnsw');
var words = ['Terrible','Nasty','Cold','Pain','Busy','Whole','Mention','Lessons','Persuade','Pretend'];
var wordsTranslations = ['Ужасно','Противный','Холодно','Боль','Занят','Целый','Упомянуть','Уроки','Убедить','Притворяться'];
EnglishTest.currentPosition = $('#currentPosition');
const random = Math.floor(Math.random() * words.length);
var index = 0;
var wordSelected = "";
var wordSelectedTranslation = "";

var startTest = function(){
    EnglishTest.translation.show();
    EnglishTest.submit.show();
    EnglishTest.tracker.show();
    EnglishTest.startButton.hide();
    goForward();
}
var SubmitAndChange = function(){
    if(EnglishTest.translation.val().length == 0){
        alert("Введите что-то");
        return;
    }
    if(correct()){
        EnglishTest.countCorrect +=1;
        console.log("верно")
    }
    else{
        EnglishTest.countIncrorrect +=1;
    }
    updateStatus();
    if(words.length == 0){
        var result = "";
        if(EnglishTest.countCorrect<1){
            result = "Полный ноль"
        }
        else if(EnglishTest.countCorrect<2){
            result = "Полный "
        }
        else if(EnglishTest.countCorrect<3){
            result = "Полны"
        }
        else if(EnglishTest.countCorrect<5){
            result = "Полный ноль"
        }
        else if(EnglishTest.countCorrect<7){
            result = "Полный ноль"
        }
        else if(EnglishTest.countCorrect<8){
            result = "Полный ноль"
        }
        else{
            result = "Вы лучший"
        }
        alert(`Квест окончен с результатом: ${EnglishTest.countCorrect}/10. Ваш уровень английского: ${result}`);
        location.reload();
    }
    goForward();
}



var goForward = function(){

    index = Math.floor(Math.random()*words.length);
    wordSelected = words[index];
    wordSelectedTranslation = wordsTranslations[index];
    EnglishTest.ctx.clearRect(30,30, EnglishTest.canvas.width, EnglishTest.canvas.height);
    EnglishTest.ctx.fillText(wordSelected, 40,100);
    words.splice(index, 1);
    wordsTranslations.splice(index, 1);
    
}
var track = function () {
    //EnglishTest.tracker.innerHTML = "<p>Правильных ответов: " + cardGame.wins + " Ошибок: " + cardGame.losses + "</p>";
    cardGame.newGame.classList.remove("hidden");
    cardGame.buttonBox.classList.add("hidden");
}

var correct = function(){
    console.log(EnglishTest.translation.val(),wordSelectedTranslation);
    if(EnglishTest.translation.val() == wordSelectedTranslation){
        return true;
    }
    return false;
}
var updateStatus = function(){
    EnglishTest.currentPosition.text(EnglishTest.countCorrect+ EnglishTest.countIncrorrect);
    EnglishTest.correctAnsw.text(EnglishTest.countCorrect);
    EnglishTest.incorrectAnsw.text(EnglishTest.countIncrorrect);
}
