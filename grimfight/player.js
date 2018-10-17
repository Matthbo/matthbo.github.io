function Player(column, row, ID) {
	this.column = column;
	this.row = row;
	this.x = this.column * GRIDSIZE + HALF_GRIDSIZE;
	this.y = this.row * GRIDSIZE + HALF_GRIDSIZE;
	this.ID = ID;

	///Resources///
	this.health = 20;
	this.foodCount = 2;
	this.ingotCount = 0;
	this.vineCount = 0;
	this.waterCount = 2;
	this.iceCount = 0;
	///////////////

	switch(this.ID){
		case 0: this.col = color(100, 100, 255, 200); break;
		case 1: this.col = color(100, 255, 100, 200); break;
		case 2: this.col = color(255, 100, 100, 200); break;
		case 3: this.col = color(100, 100, 100, 200); break;
		default: this.col = color(random(255), random(255), random(255)); break;
	}

	this.show = function() {
		fill(this.col);
		stroke(255, 0, 0);
		strokeWeight(2);
		ellipse(this.x, this.y, HALF_GRIDSIZE);
		fill(0);
		text(this.ID + 1, this.x - GRIDSIZE/10, this.y + GRIDSIZE/10);
	}

	this.gatherResource = function() {
		let index = this.row * COLS + this.column;
		switch(posTracker(index)){
			case GRASS: 		this.foodCount += 1; break;
			case HILLS: 		this.foodCount += 2; break;
			case MOUNTAINS: 	this.ingotCount += 1;break;
			case DESERT: 		this.sandCount += 3; break;
			case JUNGLE: 		this.foodCount += 2; break;
			case RICHGROUND: 	this.foodCount += 4; break;
			case WATER: 		this.waterCount += 2;break;
			case VOLCANO: 							 break;
			case ICE: 			this.iceCount += 1;  break;
			case SNOW: 			this.waterCount += 1;break;
		}
		

		nextTurn();
	}//end of gatherResource function

	this.moveUp = function() {
		this.y -= GRIDSIZE;
		this.row--;
		nextTurn();
	}
	this.moveDown = function() {
		this.y += GRIDSIZE;
		this.row++;
		nextTurn();
	}
	this.moveRight = function() {
		this.x += GRIDSIZE;
		this.column++;
		nextTurn();
	}
	this.moveLeft = function() {
		this.x -= GRIDSIZE;
		this.column--;
		nextTurn();
	}

	this.interact = function(action) {
		if(posTracker(rowOfMouse * COLS + colOfMouse) != WATER){//if the mouse does NOT move the player into water
			switch(action.toLowerCase()){
				case 'up':
					this.moveUp();
				break;
				case 'right':
					this.moveRight();
				break;
				case 'down':
					this.moveDown();
				break;
				case 'left':
					this.moveLeft();
				break;
			}//end of switch
		}else{

		}
	}//end of this.interacts

	this.craft = function(item) {
		let item = item.toLowerCase();
		
	}//end of this.craft


}//end of player function