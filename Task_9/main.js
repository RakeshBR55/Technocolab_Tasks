const registeredearly = true
const runnerAge  = 17
let raceNumber = Math.floor(Math.random() * 1000);
if (runnerAge > 18 && registeredearly){
    raceNumber+=1000;
    console.log("Runner no is :", raceNumber, " and race starts at 9:30")

}
else if(runnerAge>18 && !registeredearly){
    console.log("Runner no is :", raceNumber, " and race starts at 11:00")

}
else if(runnerAge<18) {
    console.log("Runner no is :", raceNumber, " and race starts at 12:30")
    
}
