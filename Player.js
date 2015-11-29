/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY) {
	var x = startX,
		y = startY,
		angle = 5,
		id;

	// Getters and setters
	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};

	var getAngle = function() {
		return angle;
	};

	var setX = function(newX) {
		x = newX;
	};

	var setY = function(newY) {
		y = newY;
	};

	var setAngle = function(newAngle) {
		angle = newAngle;
	};

	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		getAngle: getAngle,
		setX: setX,
		setY: setY,
		setAngle: setAngle,		
		id: id
	}
};

// Export the Player class so you can use it in
// other files by using require("Player").Player
exports.Player = Player;