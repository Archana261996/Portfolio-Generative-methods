class tourGuideBot {
	constructor() {
		this.moneySaved = 0
		this. maxMoney = 10000

		this.grammar = tracery.createGrammar(tourGuideGrammar)
		this.grammar.addModifiers(baseEngModifiers)
	}

respondTo(s) {

		if(s.toLowerCase().includes("hola")||s.toLowerCase().includes("hello")||s.toLowerCase().includes("hi")||s.toLowerCase().includes("hey")){
			let greetings = this.grammar.flatten("#greetings#")
			speechSynthesis.speak(new SpeechSynthesisUtterance(greetings))
			return greetings
		}

		else if(s.toLowerCase().includes("North-India")||s.toLowerCase().includes("north")||s.toLowerCase().includes("North India")){
			let north_img = this.grammar.flatten("#north1#")
			let north_text = this.grammar.flatten("#north4#")
			return [north_text, `<img src=${north_img} height='150'></img>`]
		}

		else if(s.toLowerCase().includes("South-India")||s.toLowerCase().includes("south")||s.toLowerCase().includes("South India")){
			let south_img = this.grammar.flatten("#south1#")
			let south_text = this.grammar.flatten("#south4#")
			return [south_text, `<img src=${south_img} height='150'></img>`]
		}

		else if(s.toLowerCase().includes("West-India")||s.toLowerCase().includes("west")||s.toLowerCase().includes("West India")){
			let west_img = this.grammar.flatten("#west1#")
			let west_text = this.grammar.flatten("#west2#")
			return [west_text, `<img src=${west_img} height='150'></img>`]
		}

		else if(s.toLowerCase().includes("East-India")||s.toLowerCase().includes("east")||s.toLowerCase().includes("East India")){
			let east_img = this.grammar.flatten("#east1#")
			let east_text = this.grammar.flatten("#east2#")
			return [east_text, `<img src=${east_img} height='150'></img>`]
		}

		else if(s.toLowerCase().includes("Save-money")||s.toLowerCase().includes("money")||s.toLowerCase().includes("Save money"))
		{

         let interval = setInterval(() => {
				this.moneySaved = Math.min(this.moneySaved + 1000,  this.maxMoney)
				if (this.moneySaved >= this.maxMoney) {
					this.post(`Yaayy! You have enough money for your India trip! Bon Voyage!✈️`)
					clearInterval(interval)
				}
                   else {
					// console.log("post to chat")
					this.post("Keep saving... ")}
		}, 200)
	}

		else if(s.toLowerCase().includes("Bye")||s.toLowerCase().includes("bye")||s.toLowerCase().includes("Good Bye")){
         let fare_gif = "chibi-cat-mochi-cat.gif"
			return `<img src=${fare_gif} height='150'></img>`
		}
		
else {
let def_value = "Sorry, I did not understand. Please choose a region of India you want to learn about! "
speechSynthesis.speak(new SpeechSynthesisUtterance(def_value))
return def_value
}
	}
}