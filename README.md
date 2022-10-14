# Rock Paper Scissors (Pokemon Remix)

## Background

I didn't understand Latin in high school, so I made my own version of the Rock Paper Scissors game using Pokemon types.

The Rock Paper Scissors trio is replaced by Fire --> Grass --> Water --> Fire (ad infinitum)

## Wireframe

Let's just pretend I have one here, ok???

## PseudoCode

```
  /*----- constants -----*/
    const types = ['Fire','Water','Grass']

  /*----- state variables -----*/
   state = {
    p1Choice: choice,
    p2Choice: choice,
    score: Number,
   }
  /*----- cached elements  -----*/
    fireButton
    waterButton
    grassButton
    scoreDisplay

  /*----- event listeners -----*/
    handleChoice
    handleReset

  /*----- functions -----*/
    compareChoices
        - update state values:
            - update score
            - replace player's choices to none because they have to pick for next round

    declareWinner
        - check score after max rounds
        - return winner

    render
        - show player's choices
        - show score
        - show winner/loser
```
