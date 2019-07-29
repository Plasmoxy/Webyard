import * as robot from 'robotjs'

// Speed up the mouse.
robot.setMouseDelay(2)

let twoPI = Math.PI * 2.0;
let screenSize = robot.getScreenSize();
let height = (screenSize.height / 2) - 10;
let width = screenSize.width;

for (var x = 0; x < width; x++)
{
	let y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
}