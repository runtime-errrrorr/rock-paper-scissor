function getComputerChoice()
{
    let choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection,computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let rules = 
    {
        'rock': {'rock': 'Tie', 'scissors': 'You won the round','paper': 'You lose the round'},
        'paper': {'rock': 'You won the round', 'scissors': 'You lose the round','paper': 'Tie'},
        'scissors': {'rock': 'You lose the round', 'scissors': 'Tie','paper': 'You won the round'}
    }

    let winner = rules[playerSelection][computerSelection];
    return winner;
}

let comp_score = 0;
let human_score = 0;
let num_rounds = 0;
function udpate_score(outcome)
{
    num_rounds++;
    if(outcome == 'You won the round')
    {
        human_score++;
    }
    else if(outcome == 'You lose the round')
    {
        comp_score++;
    }

    if(num_rounds >= 5)
    {
        if(human_score > comp_score)
        {
            result.innerText = 'Yippee!! You won the match';
        }
        else if(human_score < comp_score)
        {
            result.innerText = 'You lose, lol';
        }
        else
        {
            result.innerText = 'Tie huh';
        }
        human_score = 0;
        comp_score = 0;
    }
    score.innerText = `Player : ${human_score} || Computer : ${comp_score}`;
}

// function playGame()
// {
//     for(let i = 0; i < 5; i++)
//     {
//         let playerChoice = prompt("enter your choice");
//         let winner = playRound(playerChoice,getComputerChoice());
//         console.log(winner);
//     }
// }

const button_rock = document.createElement('button');
button_rock.innerText = 'Rock';

const button_paper = document.createElement('button');
button_paper.innerText= 'Paper';

const button_scissor = document.createElement('button');
button_scissor.innerText = 'Scissor';

const result = document.createElement('div');
result.style.padding = '10px';          // Adding padding to the result div
result.style.fontWeight = 'bold';       // Making the result text bold

const score = document.createElement('div');
score.style.fontWeight = 'bold';
score.style.padding = '10px'; 

button_rock.addEventListener('click',()=>
{
    let value = playRound('rock', getComputerChoice());
    result.innerText = `${value}`;
    udpate_score(value);

});
button_paper.addEventListener('click',()=>
{
    let value = playRound(`paper`, getComputerChoice());
    result.innerText = `${value}`;
    udpate_score(value);
});
button_scissor.addEventListener('click',()=>
{
    let value = playRound(`scissors`, getComputerChoice());
    result.innerText = `${value}`;
    udpate_score(value);
});

const div = document.createElement('div');
div.appendChild(button_rock);
div.appendChild(button_paper);
div.appendChild(button_scissor);



score.innerText = `Player : ${human_score} || Computer : ${comp_score}`;


document.body.appendChild(div);
document.body.appendChild(result);
document.body.appendChild(score);
