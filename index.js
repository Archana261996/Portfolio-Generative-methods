document.addEventListener("DOMContentLoaded", function(){
console.log("Have a Cheerful day!!")
});

function spreadCheer(){
	console.log ("Smile your way through life!!")
	var img = document.createElement("img");
        img.src = "image2.jpg";
        img.height = 200;
        img.width = 100;

        var class_name = "gif";
        img.setAttribute("class", class_name);

        document.body.appendChild(img);
}
