function pointInRectangle(pointX, pointY, rect, size) {
	return (pointX > rect.x && pointX < rect.x + size &&
			pointY > rect.y && pointY < rect.y + size)
}//end of pointInRectangle function

