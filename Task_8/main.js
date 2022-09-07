let userName = "rakesh"

console.log("hello", userName)
let userQuestion = "I want a job"
console.log("your wish is ", userQuestion)
randomNumber = Math.floor(Math.random() * 8)
let eightBall = ""
switch(randomNumber){
    case 0:
        eightBall = 'It is certain'
        break;
    case 1:
        eightBall = 'Reply hazy try again'
        break;
    case 2:
        eightBall = 'It is decidedly so'
        break;
    case 3:
        eightBall = 'Do not count on it'
        break;
    case 4:
        eightBall = 'My sources say no'
        break;
    case 5:
        eightBall = 'Outlook not so good'
        break;
     case 6:
        eightBall = 'Signs point to yes'
        break;
    case 7:
        eightBall = 'Cannot predict now'
        break;
    

}
console.log("result:",eightBall)
 