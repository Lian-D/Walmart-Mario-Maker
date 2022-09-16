# Milestone 1

## Project Description

### A DSL to allow people unfamiliar with programming to create simple yet diverse platformers. Format will be similar to SQL using things like CREATE, REQUIRE, WHILE. Typescript will be used for the backend, and React for the frontend as of now.


## Main Langauge Features

### Conditionals

Users can choose from a fixed set of conditionals, and fixed set of actions
Example: Users can specify if the player steps on a button, a hidden platform appears


### While Loops
Users can choose from a fixed set of conditionals for triggering the loop, and fixed set of actions that can occur in the loop
Example: Allow users to specify loops, while a condition is true, action happens on a specific object (player, entity, door, enemy).
Example: Allow users to loop through an array of objects (entity, enemy, door)

### Complex Data Structures
Users can specify an array of enemies


### Functions/Procedures
Allow users to specify conditions as functions

Example: Object requires (condition) (><==) [could also be keys or coins)
Example: Object while (condition) moves between [coords]

### Recursion
Allow users to specify an input for recursion
Example: Allow users to specify players to recurse through different levels depending on the data given to a door.

### TA Suggestions and Follow Up Tasks
At TA suggestion, we added the control flow elements and the SQL like format.

At this stage, we will begin considering how to translate the parsed data into Typescript, as well as looking more into Typescript and React. We have confirmed that there is a ANTLR library available for Typescript.
