# Milestone 1

## Project Description

### A DSL to allow people unfamiliar with programming to create simple yet diverse platformers. Format will be similar to SQL using things like CREATE, REQUIRE, WHILE. Typescript will be used for the backend, and React for the frontend as of now.


## Main Language Features

### Conditionals

Users can choose from a fixed set of conditionals, and fixed set of actions <br/>
Example: Users can specify if the player steps on a button, a hidden platform appears


### While Loops
Users can choose from a fixed set of conditionals for triggering the loop, and fixed set of actions that can occur in the loop<br/>
Example: Allow users to specify loops, while a condition is true, action happens on a specific object (player, entity, door, enemy).<br/>
Example: Allow users to loop through an array of objects (entity, enemy, door)

### Complex Data Structures
Users can specify an array of enemies


### Functions/Procedures
Allow users to specify conditions as functions<br/>

Example: Object requires (condition) (><==) [could also be keys or coins)<br/>
Example: Object while (condition) moves between [coords]

### Recursion
Allow users to specify an input for recursion<br/>
Example: Allow users to specify players to recurse through different levels depending on the data given to a door.

### TA Suggestions and Follow Up Tasks
At TA suggestion, we added the control flow elements and the SQL like format.<br/>

At this stage, we will begin considering how to translate the parsed data into Typescript, as well as looking more into Typescript and React. We have confirmed that there is a ANTLR library available for Typescript.


# Milestone 2

## Divison of Responsibilities
Front-end: Len, Alex <br/>
Grammar: Divy up. <br/>
Data-Parsing: Nathan, Lian <br/>
Back-end: Lian, Steven <br/>

## Roadmap:
Sept 23rd -> <br/>
    Mocks of Input and outputs <br/>
    Placeholder Sprites <br/>
    Figuring out rendering process <br/>

Sept 29th ->  <br/>
    Parsers and backend Completed <br/> 
    Mockup of Language provided to Front-end <br/>
    First User Study <br/>

Oct 6th -> <br/>
    Front End work <br/>        
    Final User Study <br/>

Oct 13th -> <br/>
    Video Draft <br/>
    Completion of Project <br/>

## Summary Of Progress
We have decided on the technology stack for this project, and as seen above, the division of responsibilities and roadmap. We will now begin finalizing the grammar. 


# Milestone 3

## User Study Example

We gave our first user study this task to implement 

Task 1: Create a level that has:

A green button
2 doors that connect to each other
Create 2 terrain types called “grass” and “dirt”
Have the grass terrain cover the entire bottom of the level
do you think this is specific enough to be useful for an initial user study?


## User Study Feedback
We have started with our user studies and had our users try to implement simple tasks in our program. Here is the feedback that we have been given.

- How many spaces do I need to put in?
- Does capitalization matter?
- What colours are allowed?
- Does level need to be at the end?
- How does the index work with the positioning? Does it start at 0 or 1?
- Requirements for level isn't super specific
- How does order matter?
- Valuable set range: more clear boundaries for each conditions
- Terrain and if then statement was the most confusing part of the problem 
- OR keyword is better than the |, not everyone would know what the | symbol means


## What we have implemented

- Basic Demo has been created
- Collision detection for platforms, ground, enemies and win conditions (door)
- Hard coded game that player can control


## What we need to implement

- Fix some bugs with platforming
- Collectibles such as coins
- Button triggers
- Back-end that interprets DSL


