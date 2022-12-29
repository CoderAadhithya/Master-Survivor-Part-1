var database, form, player, game
function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database()
  game = new Game();
  game.start()
}

function draw() {
  background(255,0,0);  
  drawSprites();
}