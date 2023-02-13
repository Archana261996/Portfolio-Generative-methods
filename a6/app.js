	
let simCount = 0

let noise = (new p5()).noise



	// <simulation type="DustSimulation" mode="gol" :dimensions="[40,30]" :tileSize="10" speed="100"/>

	// What if much bigger?
	// <simulation type="DustSimulation" mode="gol" :dimensions="[50,70]" :tileSize="10" speed="50"/>

	// <simulation type="DustSimulation" mode="gol" :dimensions="[40,30]" :tileSize="10" speed="100"/>
	// type information here
document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el : "#app",
		template: `<div id="app">
			<h1> This is an illustration of the talents parable </h1>
			<p>The parable of talents talks about a master who gives talents to his servants before he leaves town. 
			The servant to whom he gives 5 talents invests the 5 talents and has a total of 10 talents. The 
			servant who was given 3 talents doubles that and has a total of 6 talents. The servant who was 
			given 1 talent was scared of losing the talent, hence he  buried it in the ground and did not in any way invest the talents.
			The master got furious that the last servant did not take risks and invest his talent so he took that away and gave it to the 
			servant with 10 talents<p>

            <b>Simulation 1</b><br>
			This Emoji essay is an intepretation of this parable. The first mode is called 5 talents. In this intepretation the 🤩 represents 
			talents(or as I would like to call it joy). Since we are spreading joy, it goes everywhere and we rejoice with celebration (🍻) and 
			money (🤑). This is an extremely cheerful simulation with money and celebration. Notice that the 🤩 fills the spaces which are empty with no 
			neighbouring bricks, a few bricks are replaced with 🤑 and a few of the 🤑 are replaced with 🍻. If there were bricks in the cells
			and the neighbouring cells were empty nothing happens in those cells.
			<simulation type="TalentsParable" mode="5talents" :dimensions="[20,15]" :tileSize="26"/>
			
			<b>Simulation 2</b><br>
            The second mode has fewer 🤩 smileys indicating the fact that the second servant got fewer talents (or in my case Joy). Note that
            the joy still spreads through the cells which still brings about monetory benefits to everyone. However, since there is lesser cheer to spread
            we do not have celebration 🍻 in this simulation. The Joy 🤩 spreads to the empty cells and most of the bricks are replaced with 🤑 in this simulation.  


			<simulation type="TalentsParable" mode="3talents" :dimensions="[20,15]" :tileSize="26"/>
			
			<b>Simulation 3</b><br>

			This mode is a representation of the master giving the last servant 1 talent. We have very few 🤩 in this simulation. They do not spread
			across the cells because in this story the servant does not use his talent, he buries it and keeps it safe. Burying the talent ultimately made the
			servant sad because the master took the talent away from him. Similarly, not spreading joy to everyone will ultimately make us sad. This is represented by the danger
			symbol ⚠️ and sad symbol 🎭 in this simulation. Danger icons are placed in a few empty cells and are alternatively displayed along with the sad symbol in this 
			simulation. This is supposed to denote the sadness and danger that comes with not spreading Joy. Let's all stay happy and spread it to everyone :)

			<simulation type="TalentsParable" mode="1talent" :dimensions="[20,15]" :tileSize="26"/>
			
		</div>`,
		
	}) 
})



//==================================
// Grid utilities

// Create a grid of columns
function createGrid(w, h) {
	const grid = Array.from(new Array(w),()=>Array.from(new Array(h),()=>"-"));
	return grid
}

// Set a grid equal to a function
function setGrid(grid, fxn) {
	if (grid === undefined)
		console.warn("no grid!")
	if (fxn === undefined)
		console.warn("no function for setting the grid!")
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			grid[i][j] = fxn(i,j)
		}
	}
}

// Copy a grid
function copyGrid(dest, src) {
	for (var i = 0; i < src.length; i++) {
		for (var j = 0; j < src[i].length; j++) {
			dest[i][j] = src[i][j]
		}
	}
}
