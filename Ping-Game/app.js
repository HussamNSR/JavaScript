/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore, activePlayer, gamePlaying, lastDice, val, dice, dice1, dice2;


scores=[0,0];
roundscore=0;
activePlayer=0;
gamePlaying = true;
lastDice1=0;
lastDice2=0;


//document.getElementById('id').textContent = '0';       just for your info

document.querySelector('.dice1').style.display='none';// hiding dice image.
document.querySelector('.dice2').style.display='none';


document.querySelector(".btn-roll").addEventListener('click', rollDice );
document.querySelector(".btn-hold").addEventListener('click', hold );
document.querySelector(".btn-new").addEventListener('click', NewGame );


function rollDice()
{
    if(gamePlaying)
        {
            
            
            dice1 = Math.floor(Math.random() * 6) + 1; //random number
            dice2 = Math.floor(Math.random() * 6) + 1; //random number
            
            dice = dice1+dice2;
            
            console.log(dice1);
            console.log(dice2);
            // dice1 display
            var diceDom = document.querySelector('.dice1');
            diceDom.src = "dice-" + dice1 + ".png";
            diceDom.style.display = 'block';
            
            //dice2 display
            var diceDom = document.querySelector('.dice2');
            diceDom.src = "dice-" + dice2 + ".png";
            diceDom.style.display = 'block';
            

           if((dice1 === 6 && lastDice1 === 6) || (dice2 === 6 && lastDice2 === 6))
           {
               // reset total score
               scores[activePlayer] = 0;
               document.querySelector('#score-' + activePlayer).textContent = 0;
               NextPlayer(); 
           }
            
            else if (dice1 !== 1 && dice2 !== 1 ) // make sure no repeated 6 dices
            {
                roundscore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundscore;  
            }

            else
            {
                
                NextPlayer();              
            } 
            
            lastDice1 = dice1;
            lastDice2 = dice2;
        }
    
}


function hold()
            {
                
                if(gamePlaying)
                  {
                       scores[activePlayer]+=roundscore;
                       document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                      
                       val = document.querySelector('.top-score').value;
                      

                        if(scores[activePlayer] >= val)     
                        {
                            document.querySelector('#name-' + activePlayer).textContent = 'winner';
                            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                            document.querySelector('.dice1').style.display='none';
                            document.querySelector('.dice2').style.display='none';
                            gamePlaying = false;

                        }


                        else
                        {

                          NextPlayer();  

                        }
                  }    
            }



function NewGame()
            {
               roundscore = 0;
               scores=[0,0];
               activePlayer=0;
               lastDice1=0;
               lastDice2=0;
               gamePlaying = true;
                
               document.querySelector('#name-0').textContent = 'Player 1';
               document.querySelector('#name-1').textContent = 'Player 2';
               document.querySelector('#current-0').textContent = 0;
               document.querySelector('#current-1').textContent = 0;
               document.querySelector('#score-0').textContent = 0;
               document.querySelector('#score-1').textContent = 0; 
               document.querySelector('.player-0-panel').classList.remove('winner');
               document.querySelector('.player-1-panel').classList.remove('winner');
               document.querySelector('.player-0-panel').classList.remove('active');
               document.querySelector('.player-0-panel').classList.add('active');
               document.querySelector('.player-1-panel').classList.remove('active');
               document.querySelector('.dice1').style.display='none';
            }



function NextPlayer()
{
    roundscore=0;
    lastDice1=0;
    lastDice2=0;
    document.querySelector('#current-' + activePlayer).textContent = roundscore;
    activePlayer===0 ? activePlayer = 1 : activePlayer = 0;
    
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice1').style.display='none';
    document.querySelector('.dice2').style.display='none';
               
}

