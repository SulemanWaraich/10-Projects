        let bat = 0;
        let ball = 1;
        let stump = 2;
        let rand = Math.random() * 2;
        let user = Math.round(rand);
        
        let scoreStr = localStorage.getItem('score');
        let score;
        resetScore(scoreStr);
        function resetScore(scoreStr)
        {
            score = scoreStr ? JSON.parse(scoreStr) : 
            {
                win: 0,
                loss:0,
                tie:0,
            };
        
            score.displayScore = function()
                {
                    return `wins: ${score.win}, losses: ${score.loss}, ties: ${score.tie}`;
                }

            showResult();
        }

        function randomChoiceGenerator()
        { 
            rand = Math.random() * 2;
            user = Math.round(rand);
            
            if(user == bat)
            {
                return 'bat';
            }
            else if(user == ball)
            {
                return 'ball';
            }
            else
            {
                return 'stump';
            }
        }

        function getResult(userChoice,computerChoice)
        {
            if(userChoice === 'bat')
            {
                if(userChoice == computerChoice)
                {
                    score.tie++
                    return 'match tie'
                }
                else if(computerChoice == 'ball')
                {
                    score.win++
                    return 'You won'
                }
                else
                {
                    score.loss++
                    return 'computer won'
                }
            }
            else if(userChoice === 'ball')
            {
                if(userChoice == computerChoice)
                {
                    score.tie++
                    return 'match tie'

                }
                else if(computerChoice == 'bat')
                {
                    score.loss++
                    return 'computer won'
                }
                else
                {
                    score.win++
                    return 'You won'
                }    
            }
            else
            {
                if(userChoice == computerChoice)
                {
                    score.tie++
                    return 'match tie'

                }
                else if(computerChoice == 'ball')
                {
                    score.loss++
                    return 'computer won'
                }
                else
                {
                    score.win++
                    return 'You won'
                }
            }
        }

        function showResult(userChoice,computerChoice,result)
        {
            let obj = JSON.stringify(score);
            localStorage.setItem('score',obj);

            document.querySelector('#user-move').innerText = userChoice !== undefined ? `Your choice is ${userChoice}` : '';
            document.querySelector('#computer-move').innerText = computerChoice !== undefined ? `Computer choice is ${computerChoice}` : '';
            document.querySelector('#result').innerText = result !== undefined ? `Result:  ${result}` : '';
            document.querySelector('#noOfMatches').innerText = `Score:  ${score.displayScore()}`;
        }