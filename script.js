let rock= document.getElementById("rock")
let paper= document.getElementById("paper")
let scissors= document.getElementById("scissors")
let userScore= 0
let computerScore= 0


// const getUserChoice = (userInput) =>{
//     userInput = userInput.toLowerCase(); 
//       if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
//         return userInput;
//       }
//       else{
//         console.log('There is an error.')
//       }
//     };

rock.addEventListener("click", function(){playGame("rock")})
paper.addEventListener("click", function(){playGame("paper")})
scissors.addEventListener("click", function(){playGame("scissors")})


    const getComputerChoice = () =>{
      const randomNumber =Math.floor(Math.random() * 3);
      switch (randomNumber) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';      
      }
    }
    
     const determineWinner = (userChoice, computerChoice) =>{
    //   if(userChoice ==='bomb'){
    //     return 'You destoyed your opponet! HA HA HA!';
    //   }
      if (userChoice === computerChoice){
        return 'The game is a tie';
      }
      
      if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
          computerScore++
          return 'The Computer Won!';
        }
        else{
          userScore++
          return 'You Won';
        }
      }
      
        if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          computerScore++
          return 'The Computer Won!';
        }
        else{
          userScore++
          return 'You Won';
        }
      }
      
        if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
          computerScore++
          return 'The Computer Won!';
        }
        else{
          userScore ++
          return 'You Won';
        }
      }
    }
    
    const playGame = (userChoice) =>{
      // const userChoice=getUserChoice('rock');
      const computerChoice = getComputerChoice();
      console.log('Your choice is: ' + userChoice);
      console.log('The Computer Choice is: ' + computerChoice);
      console.log(determineWinner(userChoice,computerChoice));
      document.getElementById('computer-choice').innerHTML="The Computer chose "+ computerChoice;
      document.getElementById('User-choice').innerHTML="I chose "+ userChoice
     document.getElementById("my").innerHTML=userScore
      document.getElementById('opp').innerHTML=computerScore;
      console.log('computerScore');
    }
