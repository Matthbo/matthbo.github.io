var gSlider1 ;
var gSlider2 ;
var gSlider3 ;
var gSlider4 ;
var TgSlider1;
var TgSlider2;
var TgSlider3;
var TgSlider4;

let grid = [];
let players = [];
let buttons = [];
let cnvs;

const COLS = 12, ROWS = 12;
const GRIDSIZE = 40;
const BUTTONSIZE = 60;
const WIDTH_OFFSET = BUTTONSIZE + 20
const WIDTH = COLS * GRIDSIZE + WIDTH_OFFSET, HEIGHT = ROWS * GRIDSIZE;

const GRASS = 'grass',   HILLS = 'hills',     MOUNTAINS = 'mountains';
const DESERT = 'desert', JUNGLE = 'jungle',   RICHGROUND = 'richground';
const WATER = 'water',   VOLCANO = 'volcano', ICE = 'ice', SNOW = 'snow';

const HALF_GRIDSIZE = GRIDSIZE / 2, THIRD_GRIDSIZE = GRIDSIZE / 3, QUARTER_GRIDSIZE = GRIDSIZE / 4;

let currentRandomNumber;

let amountOfPlayers = 4;
let currentTurn = 0; 
let currentTurnHTML;
let roundCounter = 0;
let turnCounterHTML;
let playersStatsHTML = [];

  function setup() {
    cnvs = createCanvas(WIDTH, HEIGHT);

    for(let i = 0; i < ROWS; i++){
      for(let j = 0; j < COLS; j++){
        let cell = new Cell(j, i);
        grid.push(cell);
      }
    }//end of grid

    //creating of buttons/
    for(let i = 0; i < 8; i+=2){
      buttons.push(new Button(WIDTH - BUTTONSIZE - 10, BUTTONSIZE * i + 20, BUTTONSIZE, i));
    }
    //////////////////////

    //creating of players/////////////////
    for(let i = 0; i < amountOfPlayers; i++){
      let col = floor(random(COLS));
      let row = floor(random(ROWS));
      players.push(new Player(col, row, i));

      playersStatsHTML.push(createP(
        '<br> player number: ' + (i+1) +
        '<br> amount of food: ' + players[i].foodCount +
        '<br> amount of ingot: ' + players[i].ingotCount +
        '<br> amount of vine: ' + players[i].vineCount +
        '<br> amount of water: ' + players[i].waterCount +
        '<br> amount of ice: ' + players[i].iceCount
        ));
      playersStatsHTML[i].position(WIDTH + 150 * (playersStatsHTML.length), 50)

    }

    //fixing starting location
    if(players[0]){
      players[0].x = HALF_GRIDSIZE + GRIDSIZE*4;
      players[0].column = 4;
      players[0].y = HALF_GRIDSIZE + GRIDSIZE*4;
      players[0].row = 4;
    }
    if(players[1]){
      players[1].x = HALF_GRIDSIZE + GRIDSIZE*7;
      players[1].column = 7;
      players[1].y = HALF_GRIDSIZE + GRIDSIZE*4;
      players[1].row = 4;
    }
    if(players[2]){
      players[2].x = HALF_GRIDSIZE + GRIDSIZE*4;
      players[2].column = 4;
      players[2].y = HALF_GRIDSIZE + GRIDSIZE*7;
      players[2].row = 7;
    }
    if(players[3]){
      players[3].x = HALF_GRIDSIZE + GRIDSIZE*7;
      players[3].column = 7;
      players[3].y = HALF_GRIDSIZE + GRIDSIZE*7;
      players[3].row = 7;
    }
    
    /////////////////////////////////////

    currentRandomNumber = rollDice()
    //HTML
    currentTurnHTML = createP('&nbsp It is now the turn of player ' + (currentTurn + 1));
    turnCounterHTML = createP('&nbsp It is now round ' + ++roundCounter);

    randomNumberHTML = createP(currentRandomNumber);
    randomNumberHTML.position(WIDTH + 10, HEIGHT - 40);

     gSlider1 = createSlider(0, 20, 20);
     gSlider2 = createSlider(0, 20, 20);
     gSlider3 = createSlider(0, 20, 20);
     gSlider4 = createSlider(0, 20, 20);

     TgSlider1 = createP("player1 hp: " + gSlider1)
     TgSlider2 = createP("player2 hp: " + gSlider2)
     TgSlider3 = createP("player3 hp: " + gSlider3)
     TgSlider4 = createP("player4 hp: " + gSlider4)


  }//end of setup


  function draw() {
    background(51);
    colOfMouse = floor(mouseX / GRIDSIZE);
    rowOfMouse = floor(mouseY / GRIDSIZE);


    for (g of grid) {
      g.show();
    }

    for (b of buttons) {
      b.show();
    }

    for (var i = players.length - 1; i >= 0; i--) {
      players[i].show();
    }

    for(let i = 0; i < playersStatsHTML.length; i++){
      playersStatsHTML[i].html(
        '<br> player number: ' + (i+1) +
        '<br> amount of food: ' + players[i].foodCount +
        '<br> amount of ingot: ' + players[i].ingotCount +
        '<br> amount of vine: ' + players[i].vineCount +
        '<br> amount of water: ' + players[i].waterCount +
        '<br> amount of ice: ' + players[i].iceCount
      );
    }

    TgSlider1.html("player1 hp: " + gSlider1.value());
    TgSlider2.html("player2 hp: " + gSlider2.value());
    TgSlider3.html("player3 hp: " + gSlider3.value());
    TgSlider4.html("player4 hp: " + gSlider4.value());

    randomNumberHTML.html(currentRandomNumber);



  }//end of draw


  function mousePressed() {

    let i = currentTurn;


    console.log("the position of the mouse: ", colOfMouse, rowOfMouse);
    console.log("the position of the current player: ", players[i].column, players[i].row);
    if(mouseX < GRIDSIZE * COLS){ //within the game
        //checking if clicked on the player
      if      (players[i].column == colOfMouse && players[i].row == rowOfMouse){
        players[i].gatherResource();
      //checking if clicked next to the player and moving it
      }else if (players[i].column == colOfMouse){  
        if      (rowOfMouse - players[i].row == 1){
          players[i].interact('down');
        }else if(rowOfMouse - players[i].row == -1){
          players[i].interact('up');
        }
      }else if(players[i].row == rowOfMouse){

        if      (colOfMouse - players[i].column == 1){
          players[i].interact('right');
        }else if(colOfMouse - players[i].column == -1){
          players[i].interact('left');
        }
      }
    }else{//buttons on the side
      for (let i = 0; i < buttons.length; i++) {
        if(pointInRectangle(mouseX, mouseY, buttons[i], BUTTONSIZE)){
          buttons[i].activate(i);
        }
      }
    }
    

  }//end of mousePressed


  function nextTurn() {
    currentTurn++;
    if(currentTurn >= players.length){
      nextRound();
    }

    //every 10 turns remove 1 food
    if(currentTurn % 10 == 0){
      for(p of players){
        p.foodCount--;
        p.waterCount--;
      }
    }

    //updating HTML
    currentTurnHTML.html('&nbsp It is now the turn of player ' + (currentTurn + 1));
    turnCounterHTML.html('&nbsp It is now round ' + roundCounter);
    currentRandomNumber = rollDice();
  }//end of nextTurn

  function nextRound() {
    currentTurn = 0;
    roundCounter++
  }

  function rollDice() {
    let num = Math.floor( Math.random() * 6 + 1); //1-6
    return num;
  }