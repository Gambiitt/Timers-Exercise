function randomGame() {
    // declair variable 'num' to be empty variable
    let num;
    // declair variable 'times' aka counter set it equal to 0
    let times = 0;
    //declaired variable 'timer' set it equal to a function that sets 'num' equal to a random number and adds one to 'times'
    let timer = setInterval(function () {
        num = Math.random();
        times++
    // if 'num' is greater than .75 it stops the 'timer' function and console.log the value of 'times'
        if (num > .75) {
            clearInterval(timer);
            console.log("It took " + times + " try/tries.");
        }
    }, 1000)
}
function countDown(time){
    
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('Lift Off!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }