let numberMax = parseInt(prompt("number max please"));
while (isNaN(numberMax)) {
  numberMax = parseInt(prompt('is not a number ! try again :)'));
}

let randomNumber = Math.floor(Math.random() * (numberMax + 1));
let userNumber = parseInt(prompt("number between 0 and " + numberMax));
let compteur = 0

while (isNaN(userNumber)) {
  userNumber = parseInt(prompt('is not a number ! try again :)'));
}
//Boucle tant que numero utilisateur n'egale pas le numero random du PC
while (userNumber != randomNumber) {

  if (userNumber < randomNumber) {
    userNumber = parseInt(prompt('your number is too small, can you choose a greater one'));
  } else {
    userNumber = parseInt(prompt('your number is too big, can you choose a smaller one'));
  } 
  compteur++

}

alert('WINNEEEERRRR !!! you did it in '+ compteur + "tries")

// const secretWord = "Hopper";

// let guess;

// while (guess !== secretWord) {
//   guess = prompt("enter the secret code...");
// }

// alert("Congratulations! You got the secret code !");

///////////// LOOP FOR ////////////////////

// const seatingChart = [
//   ["Colas", "Benoit", "Elodie"],
//   ["Sola", "Irina", "Antonino", "Eli"],
//   ["John", "Maryna", "Naike", "Fabrice"],
// ];
// for (let i = 0; i < seatingChart.length; i++) {
//   const row =  seatingChart[i] ;
//   console.log("row #" + (i+1))

//   for (let j = 0; j < row.length; j++) {

//     console.log(row[j]);
//   }
// }


// const fullName = "My full name is " + user.firstName + " " + user.lastName ;
// //   console.log(fullName);



//////////// NESTED LOOP //////////////////////

// for (let i = 1; i <= 5; i++) {
//   console.log("i is " + i);
//   for (let j = 1; j <= 3; j++) {
//     console.log("----- j is " + j);
//   }
// }

///////////////// LOOPS ///////////////

// const users =  [
//   {
//     firstName: "Vito",
//     lastName: "Corleone",
//   },
//   {
//     firstName: "William",
//     lastName: "Wallace",
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//   },
//   {
//     firstName: "Amadeus",
//     lastName: "Mozart",
//   },
//   {
//     firstName: "Barack",
//     lastName: "Obama",
//   },
// ];

// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   const fullName = "My full name is " + user.firstName + " " + user.lastName ;
//   console.log(fullName);
// }


// console.log(fullAddress);
// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
// for (let i = animals.length -1; i>=0; i--){
//   console.log(animals[i]);
// }


// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
// for (let i = 5; i>=animals.length -6; i--){
//   console.log(animals[i]);
// }


// const colors = ["blue", "red", "violet", "yellow"];
// colors[2];
// for (let i = 0; i <= colors.length - 1; i++) {
//   console.log(colors[i]);
// }


// for (let i = 10; i<=1000; i*=10){
// console.log(i);
// }

///////////// OBJECT + ARRAY ///////////////////////

// const movies = [
//   {
//     title: "Braveheart",
//     year: 1995,
//     director: "Mel Gipson",
//   },
//   {
//     title: "Goodfellas",
//     year: 1990,
//     director: "Martin Scorsese",
//   },
//   {
//     title: "The Godfather",
//     year: 1972,
//     director: "Francis Ford Coppola",
//   },
//   {
//     title: "Annie Hall",
//     year: 1977,
//     director: "Woody Allen",
//   },
// ];

// console.log(movies[3]);



////////////// OBJECT BASIC /////////////////////////////

// const movie = {
//   title: "Braveheart",
//   year: 1995,
//   director: "Mel Gipson",
//   genre: ["action", "drama"],
//   rating: 92,
// };

// console.log(movie.rating); // Prints 92

// movie.rating = 97;

// console.log(movie.rating); // Prints 97

// movie.priceTotal = 66000000
// console.log(movie);

// const restaurant = {
//   name: "Ichiran Ramen",
//   address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//   city: "Brooklyn",
//   state: "NY",
//   zipcode: "11206",
// };
// let fullAddress = restaurant.address + ', ' + restaurant.city + ', ' + restaurant.state + " "+ restaurant.zipcode;
// console.log(fullAddress);


// let product = {
//   name: "Iphone 15",
//   inStock: true,
//   price: 1249.90,
//   includeInPackage : [
//     'case', 'earphones', 'charge'
// ]
// }
// console.log(product.includeInPackage[1]);


///////////////// ARRAY //////////////////////

// const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!
// leaderboard.splice(1,1,'Luna');
// leaderboard.splice(3,1, 'Draco');
// console.log(leaderboard);


// const initialArray = ["one", "two", "three"];
//     null,
//     true,
//     ["Apple", "two", undefined],
//     false,
//     ["three", "BeCode"],
//     4,
//     "I am a big bad wolf",
//     ["one"],
// console.log(initialArray.join(', '));

// const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!
// planets.shift();
// planets.push('Saturne');
// planets.unshift('Mercury')
// console.log(planets);


// let fruits = ['apple','orange', 'banana'];
// fruits.push('plum','grapes')
// console.log(fruits);

// let fruits = ['apple','orange', 'banana'];
// fruits.splice(1, 1, 'Lemon');
// console.log(fruits);

// let fruits = ['apple','orange', 'banana'];
// fruits.sort();
// console.log(fruits);


///////// SORT METHOD (ordra Alphabétique) ///////////////////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// supers.sort();
// console.log(supers);


/////// REVERSE METHOD (inverser l'odre) //////////////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// supers.reverse();
// console.log(supers);


/////////// SPLICE METHOD (Remove / replace elements of an array. It changes the original array.) /////////////////////


// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// supers.splice(2, 1, 'Green Lantern');
// console.log(supers);

///////////// SLICE METHOD (Copy portion of an array. Returns a new array It doesn't impact the orignal array.) ////////////////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman', 'Spider-Man', 'Wolverine', 'Cyclope', 'Professor X'];
// let xmen = supers.slice(3, 6);
// console.log(xmen);

///////// SPLIT METHOD (WARNING this is a STRING method.///////////////////

//     It splits a string into array by the characters inserted in the method.
//     It's the opposite of join())

// let supers = "Superman, Batman, Flash"
// let supersArray = supers.split(', ');
// console.log(supersArray);

////////// JOIN METHOD /////////////////////////


// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// console.log(supers.join('|'))




//////////// CONCAT METHOD (Concatenates two or more arrays. Doesn't change the original arrays) ///////////////


// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// supers.push('Spider-Man');
// supers.unshift('Thor');
// let newSupers = supers.concat(['Wolverine', 'Cyclops', 'Professor X']);
// console.log(supers);
// console.log(newSupers);
// console.log(supers);

/////// PUSH METHOD (add to end) /////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// supers.push('spider-man');
// console.log(supers);

////////// UNSHIFT METHOD (add to begin)////////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// supers.unshift('Thor');
// console.log(supers);


/////////// SHIFT METHOD (remove from begin) ///////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// console.log(supers.shift());
// console.log(supers);

///////// POP METHOD (remove from end) ////////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// console.log(supers.pop());
// console.log(supers);

///////// INCLUDES METHOD (returns true or false if the Array includes an element.) ////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// console.log(supers.includes('Batman'));

////////////// iNDEXOF METHOD (Returns the index of an elements of the Array. If it is not found, it returns -1 ) ////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// console.log(supers);
// console.log(supers.indexOf('Flash'));

////////////// LENGTH FUNCTIONN (used to return the length of an object) /////////////

// let supers = ['Superman', 'Batman', 'Flash', 'Aquaman'];
// console.log(supers[supers.length -1]);

//////////// BASICALY ARRAY ////////////////

// let countries = ['France', 'Belgique', 'Allemagne'];
// countries[3] = 'england';
// console.log(countries);

///////// ARRAY MULTIDIMENSIONAL ////////////////////

// let colours = ['red', 'yellow', 'pink',['green', 'blue', 'magenta']];
// console.log(colours[3] [2]);

// let num01 = prompt("enter first num");
// let num02 = prompt ("enter second num");
// let SOMME = parseFloat(num01) + parseFloat(num02);

// alert (` resultat:  ${SOMME}`);



// let num01 = prompt("enter first num");
// let num02 = prompt ("enter second num");
// let SOMME = parseFloat(num01) + parseFloat(num02);

// alert (` resultat:  ${SOMME}`);



// let R =prompt('rayon?');
// const pi = 3.14;
// let surface = (R*2)*pi;

// alert(`Surface totale du cercke: ${surface}`);


// let myNumber = "52";
// console.log(typeof myNumber);



// let num= 54;
// let numS='bonjour';
// let resultat=num + numS;

// console.log(resultat);


// let prixHT = prompt("prix sans TVA" );
// let prixTva = prixHT*0.21;
// let prixTTC = parseFloat(prixHT)+(prixTva);

// alert(`prix TVA : ${prixTTC}`);



// const name = prompt("What is your name?");
// const age = prompt("how old are you?");
// const city = prompt("where do you live?");

// alert(`Welcome ! ${name}  ${age} ${city}`);


// const word = "skateboard";

// const facialHair = word.slice(5).replace('o', 'e');
// console.log(facialHair);


// let name = "Dumbledore";
// console.log(name.slice(4,5));
// console.log(str[str.lenght -1]);



// const message = "    TASTE THE RAINBOW!  ";

// const whisper = message.toLowerCase().trim();
// console.log(whisper);



// var a = "3";
// var b = "8";

// /***********Do not change the code above 👆*******/
// //Write your code here :
// var c = b;
// var b = a;
// var a = c;
// /***********Do not change the code below 👇*******/

// console.log("a is " + a);
// console.log("b is " + b);