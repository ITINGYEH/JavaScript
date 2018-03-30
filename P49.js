var localtion1 = Math.floor(Math.random()*5);
var localtion2 = localtion1 + 1;
var localtion3 = localtion1 + 2;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
    guess = prompt("準備，瞄準，射擊！(輸入範圍：0-6的數字)：");
    if(guess < 0 || guess > 6){
        alert("您輸入了"+guess+"，此數字不再有效範圍內，請再次輸入0-6的數字");
    }else{
        guesses = guesses + 1;
        if(guess == localtion1 || guess == localtion2 || guess == localtion3){
            hits = hits + 1;
            alert("擊中，您擊中了 "+hits+" 次");
            if(hits == 3){
                isSunk = true;
                alert("你擊沉了我的戰艦！");
            }
        }else{
            alert("失誤");
        }
    }
    
}
alert("你猜了 "+guesses+" 次便擊沉了戰艦，這意味著你的射擊準確率為 " + 3/guesses);