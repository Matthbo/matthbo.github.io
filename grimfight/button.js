function Button(x, y, size, ID){
	this.x = x;
	this.y = y;
	this.length = size; 
	this.ID = ID/2;

	this.show = function() {
		noStroke();
		stroke(255);
		fill(255, 0, 0);
		rect(this.x, this.y, this.length, this.length, 10); //rectangle with rounded corners

		fill(0);
		noStroke();
		switch(this.ID){
			case 0://bow
				text('craft\nBow', this.x + 5, this.y + 40)
			break;
			case 1://sword
				text('craft\nSword', this.x + 5, this.y + 40)
			break;
			case 2://spear
				text('craft\nSpear', this.x + 5, this.y + 40)
			break;
			case 3://ice Bridge?
				text('craft\nice Bridge', this.x + 5, this.y + 40)
			break;
			
		}
	}//end of show

	this.activate = function(){
		switch(this.ID){
			case 0:
				if(players[currentTurn].vineCount >= 4){
					players[currentTurn].vineCount -= 4;//4vines & 3wood
				}else{
					console.log('not enough resources')
				}
			break;
			case 1:
				if(players[currentTurn].oreCount >= 6){
					players[currentTurn].oreCount -= 6;//4vines & 3wood
				}else{
					console.log('not enough resources')
				}
			break;
			case 2:
				if(players[currentTurn].vineCount >= 4){
					players[currentTurn].vineCount -= 4;//4vines & 3wood
				}else{
					console.log('not enough resources')
				}
			break;
			case 3:
				if(players[currentTurn].iceCount >= 3){
					players[currentTurn].iceCount -= 3;//4vines & 3wood
				}else{
					console.log('not enough resources')
				}
			break;
			
		}
	}//end of activate
}