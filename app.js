const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  //console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[59]);
console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/


game.difficulty = "Easy"; 
console.log(game)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
const starterpoke = pokemon.find(poke => poke.starter === true);
game.party.push(starterpoke);

/*
for(let poke of pokemon){
    if(poke.starter === true){
        game.party.push(poke);
        break;
    }
}
*/
console.log(game);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


for(let poke of pokemon){
    if(poke.starter === true && poke.number != 1){
        game.party.push(poke);
        
    }
}
//const starterpoke1 = pokemon.find(poke => poke.type === "fire" || poke.hp === 44);
//game.party.push(starterpoke);
//game.party.push(starterpoke);
console.log(game);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for(let gameobj of game.gyms){
    if(gameobj.difficulty < 3){
        gameobj.completed = true;
    }
};
console.log(game);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
for(let gameobj of game.party){
    if(gameobj.number === 1){
        game.party.splice(0,1,pokemon[1]);
    }else if(gameobj.number === 4){
        game.party.splice(1,1,pokemon[4]);
    }else if(gameobj.number === 7){
        game.party.splice(2,1,pokemon[7]);
    }else if(gameobj.number === 25){
        game.party.splice(3,1,pokemon[25]);
    }
};
console.log(game);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for(let gameobj of game.party){
    console.log(gameobj.name);
}

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

for(let poke of pokemon){
    if(poke.starter === true){
        console.log(poke.name); //or is it just poke so the entire object
    }
}

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchpokemon = function (pokemonObj){
    game.party.push(pokemonObj);
};

game.catchpokemon(pokemon[10]);

console.log(game)


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchpokemon = function (pokemonObj){
    game.party.push(pokemonObj);
    for(let itemObj of game.items){
        if(itemObj.name === "pokeball"){
            itemObj.quantity -= 1
        }
    }
    
};

game.catchpokemon(pokemon[10]);

console.log(game.items)

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for(let gameObj of game.gyms){
    if(gameObj.difficulty < 6){
        gameObj.completed = true;
    }
};
console.log(game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function (){
   const gymTally = {
    completed: 0,
    incomplete: 0
   };
   for(let i = 0; i < this.gyms.length; i++){
    const value = this.gyms[i];
    if(value.completed === true){
        gymTally.completed = gymTally.completed + 1;
    }else if(value.completed === false){
        gymTally.incomplete = gymTally.incomplete + 1;
    }
   }
   console.log(gymTally)
};
game.gymStatus();

/*
this is done using sqaure bracket notation
game.gymStatus = function (){
    const gymTallyy = {};
    for(let i = 0; i < this.gyms.length; i++){
     const value = this.gyms[i].completed ? "completed" : "incomplete";
     if(gymTallyy[value]){
        gymTallyy[value] = gymTallyy[value] + 1;
     }else {
        gymTallyy[value] =  1;
     }
    }
    console.log(gymTallyy)
 };

game.gymStatus();
*/

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function(){
    let count = 0;
    for(poke of game.party){
        count+=1;  
    }
    return count
}
console.log(game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for(let gameObj of game.gyms){
    if(gameObj.difficulty < 8){
        gameObj.completed = true;
    }
};
console.log(game.gyms);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/
 const compare = (a, b) => {
     return b.hp - a.hp; 
 }

game.party.sort(compare);
console.log(game.party);

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];
game.catchpokemon = function (pokemonObj){
    if(game.party.length < 6){
        game.party.push(pokemonObj);
        for(let itemObj of game.items){
            if(itemObj.name === "pokeball"){
                itemObj.quantity -= 1
            }
        }
    }else{
        game.collection.push(pokemonObj)
    }
};
game.catchpokemon(pokemon[22]);

console.log(game.collection)
console.log(game.items)

/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.catchpokemon = function (pokemonObj){
    let hasPokeball = false;
    for(let itemObj of game.items){
        if(itemObj.name === "pokeball" && itemObj.quantity != 0){
            hasPokeball = true;
            break
        }
    }
    if(hasPokeball){
        if(game.party.length < 6){
            game.party.push(pokemonObj);
            for(let itemObj of game.items){
                if(itemObj.name === "pokeball"){
                    itemObj.quantity -= 1
                }
            }
        }else{
            game.collection.push(pokemonObj)
        }
    }else{
        console.log("there are not enough pokeballs to catch the desired Pokemon")
    }
    
};

/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchpokemon = function (name){
    const pokemonName = name.toLowerCase();//convert it to lowercase for easier comparision

    const pokemonObj = pokemon.find(poke => poke.name.toLowerCase() === pokemonName);//// Use the find method to search through the pokemon array. poke represents each object in the array. We then access the name property of each poke object, convert it to lowercase, 
    // and compare it to the pokemonName variable, which is also in lowercase for case-insensitive matching.
    
    //this will check if pokemonObj is not true so falsy and if that is the case then it means there was no match
    if (!pokemonObj) {
        console.log("The selected Pokémon does not exist.");
        return;//to stop here and not run any code after it
    }

    let hasPokeball = false;
    for(let itemObj of game.items){
        if(itemObj.name === "pokeball" && itemObj.quantity != 0){
            hasPokeball = true;
            break
        }
    }
    if(hasPokeball){
        if(game.party.length < 6){
            game.party.push(pokemonObj);
            for(let itemObj of game.items){
                if(itemObj.name === "pokeball"){
                    itemObj.quantity -= 1
                }
            }
        }else{
            game.collection.push(pokemonObj)
        }
    }else{
        console.log("there are not enough pokeballs to catch the desired Pokemon")
    }
    
};
game.catchpokemon("Clefairy");
console.log(game.collection)

/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const newPokemon = {};

//for(let poke of pokemon){
//    if(poke.type === "grass" && !Object.hasOwn(newPokemon, "grass")){
//        newPokemon.grass = []
//    }
//    newPokemon.grass.push(poke)
//}


for(let i = 0; i < pokemon.length ; i++){
    let poke = pokemon[i];//create variable to store each object inside the pokemon array so this is basically pokemon[0]
    let type =  poke.type;//create a variable to store the type property found insie each pokemon object so that it can be passed through a square bracket notation 
    
    if(!newPokemon[type]){//check if newPokemon[type] is not true, this works in our case because the object starts empty
        newPokemon[type] = [];//if the property does not exist then create an empty array for that type
     }
     newPokemon[type].push(poke);//push the object into the newly made array of that type
    }

console.log(newPokemon)
