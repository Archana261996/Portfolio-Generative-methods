# A4
## Archana R
### Inspirations:
My entire canvas is supposed to represent winter in the most abstract, modern art kind of way possible
### Particle system 1: 
Particle 1 is called snowFlake particle system. As the name suggests, this system consists of snowflakes. It is supposed to remind us of winter - the prettiest season ever! (Atleast according to me).
#### What I was going for:
The other day, when I was walking home during heavy snowfall, it looked like the snowflakes went all over the place and the sky was filled with snowflakes. I tried to recreate that with my own twist. Off course, snow flakes don't go upwards, but that's the twist I was going for. In my twisted canvas, the snowflakes go in all possible directions and are as erratic as possible. It's supposed to be pretty and remind us of the season we are experiencing right now. 
#### Starter code I used:
I used the basic particle system's starter code.
#### Where the particles get their force:
I have added gravity to the particles, some wiggle to the particles, computed a force to attract the particles to the middle and applied each force to their velocity.  
#### Sliders:
I implemented two sliders for the snowflake particles - snowFlakeAttraction and snowFlakeDrag. The snowFlakeAttraction attracts the snowflakes towards each other (when slider is towards the right) and the drag slider changes how erratic the snowflakes are (when the slider is on the left hand side, the snowflakes are more erratic).
#### Debug Visualisation:
I made use of two kinds of arrows to demonstrate the force and velocity of the snowflakes. 
### Particle system 2:
Particle system 2 is called the Abstract Birds particle system. 
#### What I was going for:
As the name suggests, these particles are supposed to depict abstract birds. We don't find many birds these days during winter. But in my abstract winter wonderland we find these tiny birds (that look like sticks -- the twist I was going for) that keep circulating the sky throughout the day. This is what I was trying to depict in this canvas with this particle.  
#### Starter code I used:
I used the boids particle system's starter code.
#### Where the particles get their force:
I added some border force to the particles. I also added some wiggle to the particles, some avoidance, alignment and cohesion forces to the particles.  
#### Sliders:
I implemented three sliders for the abstractBird particles - avoidance, cohesion and alignment. The left side of the cohesion slider seperates the particles and spreads them out and the right side does the opposite. The left side of the alignment slider makes the birds look less aligned and the right side does the opposite. The avoidance slider makes the birds avoid each other.  
#### Debug Visualisation:
I made use of two kinds of arrows to demonstrate the  average velocity and alignment of the birds. 

### Particle system 3:
Particle system 3 is called the Abstract Tree particle system. 
#### What I was going for:
This spring system should remind us of Christmas trees. Since it is an abstract version, it vaguely looks like a christmas tree and is constantly moving - more like a trippy christmas tree!  
#### Starter code I used:
I used the spring particle system's starter code.
#### Where the particles get their force:
I applied spring forces to the particles  at either end. I also computed a force to bring the forces to the middle and added a wiggle to the particles. I finally applied each particle's force to its velocity.  
#### Sliders:
I implemented two sliders for the abstractTree particles - springStrength and springEase. The left side of the springEase slider stretches the springs. springStrength changes the strength of the spring.  
#### Debug Visualisation:
I made use of arrows to represent the spring forces of the particles. The arrows are red in colour. (Note that the color of the lines change to reddish when the debug system is selected).

### One related thought from the reading:

The vehicles reminded me about particles and the debugging system we created for them. Just like how the vehicles moved in the direction of the arrow, my particles moved in the direction of the debugging arrows. The article also talks about forces and how forces decide the movement of the vehicles. Similarly, I made use of gravity, spring, avoidance, cohesion and other such forces to move the particles. Any small changes in these forces changed the motion of the particles drastically (just like those violent vehicles in Chapter 2). I really liked how the author started the paper by saying - Get used to a way of thinking in which hardware of the realisation of an idea is much less important than the idea itself. This made me understand the importance of ideas especially in the creative world.

### Citations:
Thank you, Professor Compton for the amazing starter code you gave us without which it would have been so much more difficult to create this particle system. 
