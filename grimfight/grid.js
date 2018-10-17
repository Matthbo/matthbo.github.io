

function Cell(col, row) {
	this.column = col;
	this.row = row;
	this.x = this.column * GRIDSIZE;
	this.y = this.row * GRIDSIZE;
	this.ID = this.row * COLS + this.column;
	this.nature = natureChecker(this.ID);

	switch(this.nature){
		case GRASS: this.col = 		color(0, 150, 0); 		break;
		case HILLS: this.col = 		color(100, 255, 0);		break;
		case MOUNTAINS: this.col = 	color(150, 150, 150);	break;
		case DESERT: this.col = 	color(100, 100, 0);		break;
		case JUNGLE: this.col = 	color(0, 50, 0);		break;
		case RICHGROUND: this.col = color(50, 255, 100);	break;
		case WATER: this.col = 		color(100, 100, 255);	break;
		case VOLCANO: this.col = 	color(255, 100, 100);	break;
		case ICE: this.col = 		color(200, 200, 255);	break;
		case SNOW: this.col = 		color(255, 255, 255);	break;

	}

	this.show = function() {
		strokeWeight(0.5);
		stroke(200, 200);
		fill(this.col, 255);
		rect(this.x, this.y, GRIDSIZE, GRIDSIZE);
		// fill(0);
		// text(this.ID, this.x, this.y + THIRD_GRIDSIZE);
	}//end of show

}//end of Cell function

function natureChecker(ID) {

	let row1 =  'ggggggmhhhmm'
	let row2 =  'gggghhhhmmmm'
	let row3 =  'gjggghhhhmmm'
	let row4 =  'jjjjgrgghhmm'
	let row5 =  'jjjwrrrrhhmm'
	let row6 =  'jjwwrvvrghgg'
	let row7 =  'wwwwrvvrggww'
	let row8 =  'iiiggrrrgggw'
	let row9 =  'siiiwggwggjw'//j was g
	let row10 = 'ssiiiwwggjww'//j was g
	let row11 = 'ssssiiggwwww'
	let row12 = 'ssssiiwwwwww'

	let mapLayout1 = row1 + row2 + row3 + row4 + row5 + row6;
	let mapLayout2 = row7 + row8 + row9 + row10 + row11 + row12;
	let mapLayout = mapLayout1 + mapLayout2;

	let nature = mapLayout.charAt(ID)

	switch(nature){
		case 'g': return GRASS;
		case 'h': return HILLS;
		case 'm': return MOUNTAINS;
		case 'd': return DESERT;
		case 'j': return JUNGLE;
		case 'r': return RICHGROUND;
		case 'w': return WATER;
		case 'v': return VOLCANO;
		case 'i': return ICE;
		case 's': return SNOW;
		default: console.log('!!!');
	}


}//end of natureChecker function

function posTracker(arg){ //arg is index of current place on grid
	return grid[arg].nature;
}//end of posTracker
