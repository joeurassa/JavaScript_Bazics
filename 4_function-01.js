// KAREL IDE CHALLENGE.

// droping beeper on specific locations
// (a) Diagonal Line
// (b) Chess Board

// Diagonal Line
function moveAndDrop(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}
function runFourTimes(){
    moveAndDrop();
    moveAndDrop();
    moveAndDrop();
    moveAndDrop();

}

// Chase Board.
function moveRight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();


}
function movingLeft(){
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    

}
function turningRight(){
    turnRight();
    move();
    turnRight();
    

}
function doAllmoves(){
    moveRight();
    movingLeft();
    turningRight();
    moveRight();
    movingLeft();
    turningRight();
}
function moveFiveTimes(){
    doAllmoves();
    doAllmoves();
    doAllmoves();
    doAllmoves();
    doAllmoves();
}
function drawChessBoard(){
    moveFiveTimes();
}






function main(){
    // (a)
    // putBeeper();
    // runFourTimes();
    // (b)
       drawChessBoard();

}