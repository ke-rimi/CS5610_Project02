import React from 'react';
import "./RulePage.css";


function RulePage() {
    return (
    <div>
        <h1 class='header' >Game Rules</h1>
        

    
        <div class="game-step">
            <h2>Step 1</h2>
            <p>The game secretly selects the word "Fellow". And you totally have 6 attempts.</p>
        </div>

        
        <div class="game-step">
            <h2>Step 2</h2>
            <p>The screen prompts the user to input a 6-letter word and shows that they have 6 attempts remaining.</p>
        </div>

    
        <div class="game-step">
            <h2>Step 3</h2>
            <p>User submits the word "hat".</p>
            <p>Since "hat" is too short, the game prompts for a longer word and does not deduct any attempts.</p>
        </div>

    
        <div class="game-step">
            <h2>Step 4</h2>
            <p>The user submits "Allows".</p>
            <p>The game shows "<span class="highlight1">A</span>
            <span class="highlight2">L</span>
            <span class="highlight3">L</span>
            <span class="highlight3">O</span>
            <span class="highlight1">W</span>
            <span class="highlight1">S</span>" and since this is not the correct word, it shows the user has 1 less attempt.</p>
        </div>


    
        <div class="game-step">
            <h2>Step 5</h2>
            <p>The user submits "Fellow".</p>
            <p>The game shows "Congratulations! Would you like to try again?"</p>
        </div>
</div>

    );
}

export default RulePage;